import { ProductService } from 'src/app/services/product.service';
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
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.total = this.productService.getTotal();
  }
}
