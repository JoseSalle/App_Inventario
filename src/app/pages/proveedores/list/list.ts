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

  proveedores = [
    {
      id: 1,
      nombre: 'TechSupplier',
      telefono: '55-1234-5678',
      correo: 'contacto@techsupplier.com',
      direccion: 'Av. Reforma 123, CDMX'
    },
    {
      id: 2,
      nombre: 'ProTech',
      telefono: '55-9876-5432',
      correo: 'ventas@protech.com',
      direccion: 'Calle Hidalgo 45, Guadalajara'
    },
    {
      id: 3,
      nombre: 'KeyMaster',
      telefono: '55-5678-1234',
      correo: 'info@keymaster.com',
      direccion: 'Av. Juárez 89, Monterrey'
    }
  ];

}
