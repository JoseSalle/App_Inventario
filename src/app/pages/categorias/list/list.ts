import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list.html',
  styleUrls: ['./list.scss'],
})
export class List {
  categorias = [
    { id: 1, nombre: 'Electrónica', descripcion: 'Dispositivos y equipos tecnológicos.' },
    { id: 2, nombre: 'Accesorios', descripcion: 'Artículos complementarios para dispositivos.' },
    { id: 3, nombre: 'Oficina', descripcion: 'Materiales y herramientas para entornos laborales.' }
  ];
}
