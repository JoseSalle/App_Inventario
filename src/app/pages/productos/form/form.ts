import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Productos } from '../../../services/productos';
import { Categorias } from '../../../services/categorias';
import { Proveedores } from '../../../services/proveedores';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, RouterLink],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form implements OnInit {

  form: FormGroup;
  categorias: any[] = [];
  proveedores: any[] = [];
  isEditMode = false;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productosService: Productos,
    private categoriasService: Categorias,
    private proveedoresService: Proveedores,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(1)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      proveedor: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCategorias();
    this.loadProveedores();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = +id;
      this.productosService.getById(this.productId).subscribe(data => {
        this.form.patchValue({
          ...data,
          categoria: data.categoria_id,
          proveedor: data.proveedor_id
        });
      });
    }
  }

  loadCategorias() {
    this.categoriasService.getAll().subscribe(data => {
      this.categorias = data;
    });
  }

  loadProveedores() {
    this.proveedoresService.getAll().subscribe(data => {
      this.proveedores = data;
    });
  }

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.isEditMode && this.productId) {
      this.productosService.update(this.productId, this.form.value).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    } else {
      this.productosService.create(this.form.value).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }
}
