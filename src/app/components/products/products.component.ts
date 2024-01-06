import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/i-product';
import { productsList } from 'src/app/models/product-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Iproduct[] = productsList;
}
