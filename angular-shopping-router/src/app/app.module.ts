import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ProductItemComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: '', redirectTo: '/shopping-cart', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
