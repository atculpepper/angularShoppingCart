import { ProductService } from 'src/app/services/product.service';
// import { ProductsDataService } from 'src/app/services/products-data.service';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Product } from 'src/app/data-models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  @Input() productItem: Product;
  @Output() add: EventEmitter<Product> = new EventEmitter();
  productList: Product[] = [];
  total = 0;
  constructor(private productService: ProductService) {}

  // ngOnInit() {
  //   this.productList = this.productService.getProducts();
  // }

  updateProducts() {
    //this.add.emit(this.productItem);
    //debugger;
    //this.calculateTotal();
    this.total = this.productService.getTotal();
  }

  // updateProducts() {
  //   this.productsDataService.updateProducts(this.productList);
  //   this.calculateTotal();
  // }

  private calculateTotal() {
    let total = 0;
    this.productList.forEach((product) => {
      total += product.price * product.quantity;
    });
    this.total = total;
  }
}
