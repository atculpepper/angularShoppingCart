import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/data-models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

/*export class ShoppingCartContents {
  products: Product[];
  total: number;
}*/
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  @Output() productsUpdated = new EventEmitter<void>();
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.productList = products;
    });
  }

  onProductQuantityChanged() {
    this.productsUpdated.emit();
    
  }
}
