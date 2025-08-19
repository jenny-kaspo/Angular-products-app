import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgFor, NgIf,AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true,
  imports:[NgFor,NgIf,AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {
  products$!: Observable<any[]>;
  selectedItem: any = null;
  editMode = false;

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.products$ = this.productsService.products$;
  }

  viewDetails(item: any) {
    this.productsService.setSelectedProduct(item);
    this.router.navigate(['/details']);
  }

  onEdit(item: any) {
    this.selectedItem = { ...item };
    this.editMode = true;
  }

  onDelete(id: number) {
    this.productsService.deleteProduct(id);
    if (this.selectedItem?.id === id) {
      this.editMode = false;
      this.selectedItem = null;
    }
  }

  onEditSave() {
    this.productsService.editProduct(this.selectedItem);
    this.editMode = false;
    this.selectedItem = null;
  }

  onEditCancel() {
    this.editMode = false;
  }
}
