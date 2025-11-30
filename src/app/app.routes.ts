import { Routes } from '@angular/router';

//Home component
import { Home } from './pages/home/home';

//Products component
import { List as ProductsList } from './pages/productos/list/list';
import { Form as ProductsForm } from './pages/productos/form/form';

//Categories component
import { List as CategoriesList } from './pages/categorias/list/list';
import { Form as CategoriesForm } from './pages/categorias/form/form';

//Suppliers component
import { List as SuppliersList } from './pages/proveedores/list/list';
import { Form as SuppliersForm } from './pages/proveedores/form/form';



export const routes: Routes = [
  { path: '', component: Home },

  { path: 'productos', component: ProductsList },
  { path: 'productos/crear', component: ProductsForm },

  { path: 'categorias', component: CategoriesList },
  { path: 'categorias/crear', component: CategoriesForm },

  { path: 'proveedores', component: SuppliersList },
  { path: 'proveedores/crear', component: SuppliersForm },

    // OPCIONAL: Cualquier ruta desconocida → Home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
