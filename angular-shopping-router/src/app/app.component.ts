import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data-models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <a routerLinkActive="active" routerLink="/shopping-cart">Shopping Cart</a>
      |

      <a routerLinkActive="active" routerLink="/checkout">Checkout</a> |

      <router-outlet></router-outlet>
    </div>
  `,
  providers: [ProductService],

  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productList: Product[] = [];
  title = 'angular-shopping-router';
  total = 0;

  //below is shorthand for saying this.productService = ProductService
  constructor(private productService: ProductService) {}

  removeProductItem(productItem) {
    this.productService.deleteProductById(productItem.id);
  }

  getProducts() {
    return this.productService.getProducts();
  }



  calculateTotal() {
    let total = 0;
    this.productList.forEach((product) => {
      total += product.price * product.quantity;
    });
    this.total = total;
  }
}
