import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [
    { id: 1, productId: 1, quantity: 4, price: 100 },
    { id: 1, productId: 4, quantity: 4, price: 100 },
    { id: 1, productId: 2, quantity: 4, price: 100 },
    { id: 1, productId: 1, quantity: 4, price: 100 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
