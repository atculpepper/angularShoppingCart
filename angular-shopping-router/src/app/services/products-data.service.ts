import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../data-models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  private products = new Subject<Product[]>();
  constructor() {}

  getProducts(): Observable<Product[]> {
    return this.products.asObservable();
  }

  updateProducts(products: Product[]) {
    this.products.next(products);
  }
}
