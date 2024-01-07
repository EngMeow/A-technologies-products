import { Component } from '@angular/core';
import { Iproduct , ProductStatus} from 'src/app/models/i-product';
import { productsList } from 'src/app/models/product-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Iproduct[] = productsList;
  ProductStatus = ProductStatus;

  getBackgroundColor(productStatus: ProductStatus): string {
    switch (productStatus) {
      case ProductStatus.Available:
        return 'rgba(39, 208, 140, 0.10)'; // Set your desired color for Available status
      case ProductStatus.Unavailable:
        return '#FEEEEE'; // Set your desired color for Unavailable status
      case ProductStatus.AlmostFinish:
        return '#FEF8E6'; // Set your desired color for AlmostFinish status
      default:
        return 'transparent'; // Set a default color if needed
    }
  }

  getFontColor(productStatus: ProductStatus): string {
    switch(productStatus) {
      case ProductStatus.Available:
        return 'bg-success'; // Set your desired color for Available status
      case ProductStatus.Unavailable:
        return 'bg-danger'; // Set your desired color for Unavailable status
      case ProductStatus.AlmostFinish:
        return 'bg-warning'; // Set your desired color for AlmostFinish status
      default:
        return 'transparent'; // Set a default color if needed
    }
   }

   itemsPerPage:number = 5 ;
   p: number = 1;
   totalProduct:any 
}
