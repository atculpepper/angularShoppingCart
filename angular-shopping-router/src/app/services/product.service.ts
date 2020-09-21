import { Injectable } from '@angular/core';
import { Product } from '../data-models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //products is a property
  products: Product[] = [
    new Product(1, 'Stylo Un', 'This is an excellent fountain pen', 60),
    new Product(2, 'Stylo Deux', 'A customer favorite', 85),
    new Product(3, 'Stylo Trois', 'Write with class', 70),
    new Product(4, 'Stylo Quatre', 'Best value', 45),
    new Product(5, 'Stylo Cinq', 'Executive Pen', 50),
    new Product(6, 'Stylo Six', 'Budget pen', 32),
    new Product(7, 'Stylo Sept', 'Crowd pleaser', 78),
  ];

  constructor() {}
  //eventually populate it from an API
  getProducts(): Product[] {
    return this.products;
  }
}
