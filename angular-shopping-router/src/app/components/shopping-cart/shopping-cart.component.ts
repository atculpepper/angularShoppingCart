import { ProductsDataService } from 'src/app/services/products-data.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/data-models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  productList: Product[] = [];
  total = 0;
  constructor(
    private productService: ProductService,
    private productsDataService: ProductsDataService
  ) {}

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }

  updateProducts() {
    this.productsDataService.updateProducts(this.productList);
    this.calculateTotal();
  }

  private calculateTotal() {
    let total = 0;
    this.productList.forEach((product) => {
      total += product.price * product.quantity;
    });
    this.total = total;
  }
}
