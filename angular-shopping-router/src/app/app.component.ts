import { Component } from '@angular/core';

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

  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-shopping-router';
}
