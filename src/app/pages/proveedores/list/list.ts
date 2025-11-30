import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Proveedores } from '../../../services/proveedores';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {

  proveedores: any[] = [];
  errorMessage: string | null = null;

  constructor(private proveedoresService: Proveedores) { }

  ngOnInit(): void {
    this.loadProveedores();
  }

  loadProveedores() {
    this.proveedoresService.getAll().subscribe(data => {
      this.proveedores = data;
    });
  }

  delete(id: number) {
    this.errorMessage = null;
    this.proveedoresService.delete(id).subscribe({
      next: () => {
        this.loadProveedores();
      },
      error: (err) => {
        if (err.status === 400) {
          this.errorMessage = err.error.error;
        } else {
          this.errorMessage = 'Ocurrió un error al intentar eliminar el proveedor.';
        }
        setTimeout(() => this.errorMessage = null, 5000);
      }
    });
  }
}
