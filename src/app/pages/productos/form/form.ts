import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {

  form: FormGroup;

  categorias = [
    { id: 1, nombre: 'Electrónica' },
    { id: 2, nombre: 'Accesorios' },
    { id: 3, nombre: 'Oficina' }
  ];

  proveedores = [
    { id: 1, nombre: 'TechSupplier' },
    { id: 2, nombre: 'ProTech' },
    { id: 3, nombre: 'KeyMaster' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(1)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      proveedor: ['', Validators.required]
    });
  }

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log("Producto guardado:", this.form.value);
  }
}
