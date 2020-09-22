import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/data-models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  //putting this productItem on the productItem component class -- comes in from the parent as an Input (use Input decorator)
  @Input() productItem: Product;

  constructor() {}

  ngOnInit(): void {}
}
