import { Component } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';

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
  title = 'angular-shopping-router';
  //below is shorthand for saying this.productService = ProductService
  constructor ( private productService : ProductService){

    
  }
}
