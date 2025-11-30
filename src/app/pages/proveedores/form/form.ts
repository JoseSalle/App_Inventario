import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Proveedores } from '../../../services/proveedores';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form implements OnInit {
  form: FormGroup;
  isEditMode = false;
  proveedorId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private proveedoresService: Proveedores,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.proveedorId = +id;
      this.proveedoresService.getById(this.proveedorId).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.isEditMode && this.proveedorId) {
      this.proveedoresService.update(this.proveedorId, this.form.value).subscribe(() => {
        this.router.navigate(['/proveedores']);
      });
    } else {
      this.proveedoresService.create(this.form.value).subscribe(() => {
        this.router.navigate(['/proveedores']);
      });
    }
  }
}
