import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/model/product';
import { ProductsService } from 'src/services/products/products.service';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss']
})
export class PageProductsComponent implements OnInit {

  productList$: Observable<Product[]> = of([]);

  constructor(private router: Router, private productsService: ProductsService, private titleService:Title) {
    this.titleService.setTitle("Product List");
   }

  ngOnInit(): void {
    this.productList$ = this.productsService.getProducts();
  }

  goTo(productId: any) {
    this.router.navigate(["/products/" + productId]);
  }


}
