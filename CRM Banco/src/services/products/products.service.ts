import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Product } from 'src/model/product';
import { api } from '../api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(api.product + "/" + id);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(api.product);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(api.product, product, httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(api.product + "/" + product.id, product, httpOptions);
  }

}