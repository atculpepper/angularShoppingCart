import { ProductsDataService } from 'src/app/services/products-data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data-models/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  total = 0;
  constructor(private productsDataService: ProductsDataService) {}

  ngOnInit(): void {
    this.productsDataService.getProducts().subscribe((products) => {
      console.log(products);
      this.calculateTotal(products);
    });
  }

  private calculateTotal(products: Product[]) {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    this.total = total;
  }
}
