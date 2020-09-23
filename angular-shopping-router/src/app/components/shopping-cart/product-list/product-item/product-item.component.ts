import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/data-models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  //putting this productItem on the productItem component class -- comes in from the parent as an Input (use Input decorator)
  @Input() productItem: Product = {} as Product;
  @Output() productQuantityChanged = new EventEmitter<void>();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onProductQuantityChanged() {
    this.productQuantityChanged.emit();
  }

  removeProductItem(item: Product) {
    debugger
    this.productService.deleteProductById(item.id);
  }
}
