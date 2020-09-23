import { Injectable } from '@angular/core';
import { Product } from '../data-models/product';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //products is a property
  productList: Product[] = [
    new Product(1, 'Stylo Un', 'This is an excellent fountain pen', 60),
    new Product(2, 'Stylo Deux', 'A customer favorite', 85),
    new Product(3, 'Stylo Trois', 'Write with class', 70),
    new Product(4, 'Stylo Quatre', 'Best value', 45),
    new Product(5, 'Stylo Cinq', 'Executive Pen', 50),
    new Product(6, 'Stylo Six', 'Budget pen', 32),
    new Product(7, 'Stylo Sept', 'Crowd pleaser', 78),
  ];

  private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.productList
  );

  getProducts(): Observable<Product[]> {
    return this.products.asObservable();
  }

  updateProducts(products: Product[]) {
    this.products.next(products);
  }

  constructor() {}

  //eventually populate it from an API -- this method is to get all products
  // getProducts(): Product[] {
  //   return this.products;
  // }

  //get product by id
  getProductsById(id: number): Product {
    return this.productList.filter((product) => product.id === id).pop();
  }

  //update by id (to update quantity of products)
  updateProductById(id: number, values: Object = {}): Product {
    let product = this.getProductsById(id);
    if (!product) {
      return null;
    }
    Object.assign(product, values);
    return product;
  }

  //Delete /products/:id
  deleteProductById(id: number): ProductService {
    debugger;
    this.productList = this.productList.filter(
      (products) => products.id !== id
    );
    this.updateProducts(this.productList);
    return this;
  }

  getTotal(): number {
    let total = 0;
    this.productList.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  }
}
