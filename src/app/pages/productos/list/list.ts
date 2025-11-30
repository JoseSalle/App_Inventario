import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Productos } from '../../../services/productos';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {

  productos: any[] = [];

  constructor(private productosService: Productos) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos() {
    this.productosService.getAll().subscribe(data => {
      this.productos = data;
    });
  }

  delete(id: number) {
    this.productosService.delete(id).subscribe(() => {
      this.loadProductos();
    });
  }
}
