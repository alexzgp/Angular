import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/model/product';
import { ProductsService } from 'src/services/products/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<Product[]> = of([]);

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productList$ = this.productService.getProducts();
  }

}
