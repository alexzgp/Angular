import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/model/product';
import { ProductsService } from 'src/services/products/products.service';

@Component({
  selector: 'app-page-product-detail',
  templateUrl: './page-product-detail.component.html',
  styleUrls: ['./page-product-detail.component.scss']
})
export class PageProductDetailComponent implements OnInit {

  id: number = -1;
  product$?: Observable<Product>;
  
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.productService.getProduct(this.id);
  }

}
