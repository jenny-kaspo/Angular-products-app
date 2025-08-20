import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'details',
  imports:[NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  product: any=null;

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.product = this.productsService.getSelectedProduct();
  }
}
