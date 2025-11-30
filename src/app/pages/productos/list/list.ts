import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {

  productos = [
    { id: 1, nombre: 'Laptop', precio: 15000, stock: 10, categoria: 'Electrónica', proveedor: 'TechSupplier' },
    { id: 2, nombre: 'Mouse', precio: 250, stock: 50, categoria: 'Accesorios', proveedor: 'ProTech' },
    { id: 3, nombre: 'Teclado', precio: 500, stock: 20, categoria: 'Accesorios', proveedor: 'KeyMaster' }
  ];
}
