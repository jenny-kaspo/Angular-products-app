import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})


export class AddProductComponent {
  product = { name: '', image: '', price: 0, colors: '' };

  constructor(private productsService: ProductsService, private router: Router) {}

  onSubmit() {
    const newProduct = { ...this.product, id: Date.now() };
    this.productsService.addProduct(newProduct);
    this.router.navigate(['/products']);
  }
}
