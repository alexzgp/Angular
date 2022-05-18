import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/model/product';
import { ProductsService } from 'src/services/products/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  @Input() product: Product = {name: '', long_desc: '', short_desc: '', price: 0};
  productResponse$?: Observable<Product>;
  constructor(private productsService: ProductsService, private route: Router) { }

  ngOnInit(): void {
  }

  onPressButton() {
    if (this.product.id) {
      this.productsService.updateProduct(this.product).subscribe(response => {
        this.route.navigate(['/products']);
      });
    } else {
      this.productsService.createProduct(this.product).subscribe(data => {
        this.route.navigate(['/products']);
      });
    }
  }

}
