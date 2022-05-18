import { Component } from '@angular/core';
import { ProductsService } from 'src/services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TÍTULO DEFINIDO EN APP COMPONENT';
  color = "red";

  constructor(private productService: ProductsService) {

  }

  
}
