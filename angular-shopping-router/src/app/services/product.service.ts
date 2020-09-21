import { Injectable } from '@angular/core';
import { Product } from '../data-models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //products is a property
  products: Product[] = [
    new Product(1, 'Stylo Un', 'This is an excellent fountain pen', 60),
    new Product(2, 'Stylo Un', 'This is an excellent fountain pen', 85),
    new Product(3, 'Stylo Un', 'This is an excellent fountain pen', 70),
    new Product(4, 'Stylo Un', 'This is an excellent fountain pen', 45),
    new Product(5, 'Stylo Un', 'This is an excellent fountain pen', 50),
    new Product(6, 'Stylo Un', 'This is an excellent fountain pen', 32),
    new Product(7, 'Stylo Un', 'This is an excellent fountain pen', 78),
  ];

  constructor() {}
  //eventually populate it from an API
  getProducts(): Product[] {
    return this.products;
  }
}
