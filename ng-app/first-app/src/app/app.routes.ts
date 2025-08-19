import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/products/add-product.component';
import { DetailsComponent } from './components/products/details.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];
