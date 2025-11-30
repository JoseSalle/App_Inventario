import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Categorias } from '../../../services/categorias';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './list.html',
  styleUrls: ['./list.scss'],
})
export class List implements OnInit {
  categorias: any[] = [];
  errorMessage: string | null = null;

  constructor(private categoriasService: Categorias) { }

  ngOnInit(): void {
    this.loadCategorias();
  }

  loadCategorias() {
    this.categoriasService.getAll().subscribe(data => {
      this.categorias = data;
    });
  }

  delete(id: number) {
    this.errorMessage = null; // Reset error
    this.categoriasService.delete(id).subscribe({
      next: () => {
        this.loadCategorias();
      },
      error: (err) => {
        if (err.status === 400) {
          this.errorMessage = err.error.error;
        } else {
          this.errorMessage = 'Ocurrió un error al intentar eliminar la categoría.';
        }
        // Auto-clear after 5 seconds (optional, but good UX)
        setTimeout(() => this.errorMessage = null, 5000);
      }
    });
  }
}
