import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private productsSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'hoodie', image: 'https://m.media-amazon.com/images/I/51tEciwZARL.jpg', price: 1000, colors: 'red' },
    { id: 2, name: 'jeans', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-gNnQj5hHFmlvbSZjACGvZ2R3GHfUC6zL3ViZGXTMC8Z5MR-If7jikESuzpUFeMRSgDiMb0FR9xPUSruyylJbc-javHeGNK50HAFKEv3PRXLP3HSIuN38', price: 2000, colors: 'blue' },
    { id: 3, name: 'shoes', image: 'https://assets.adidas.com/images/w_940,f_auto,q_auto/bdd9f8cd43664fffbd3da8bf01188fca_9366/B75807_07_standard.jpg', price: 3000, colors: 'black' },
  ]);

  products$ = this.productsSubject.asObservable();

  private selectedProduct: any = null;

  setSelectedProduct(product: any)
   { this.selectedProduct = product; }

  getSelectedProduct() 
  { return this.selectedProduct; }

  getProducts()
   { return this.productsSubject.value; }

  addProduct(product: any) {
    this.productsSubject.next([ ...this.productsSubject.value, product]);
  }

  editProduct(updated: any) {
    this.productsSubject.next(this.productsSubject.value.map(pr => pr.id === updated.id ? updated : pr));
  }

  deleteProduct(id: number) {
    this.productsSubject.next(this.productsSubject.value.filter(pr => pr.id !== id));
  }
}
