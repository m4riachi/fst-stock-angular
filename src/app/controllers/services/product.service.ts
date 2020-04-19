import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8090/api/stock/product';
  private _product: Product = new Product();
  private _products: Array<Product> = new Array<Product>();

  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<number>(this.baseUrl + '/', this.product).subscribe(data => {
      if (data > 0) {
        this.products.push(this.product);
        this.product = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/', this.product).subscribe(data => {
      if (data > 0) {
        const index = this.products.findIndex(p => p.id === this.product.id);
        this.products[index] = this.product;
        this.product = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public delete(id, index) {
    this.http.delete<number>(this.baseUrl + '/id/' + id).subscribe(data => {
      if (data > 0) {
        this.products.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public getAll() {
    this.http.get<Array<Product>>(this.baseUrl + '/').subscribe(data => {
      this.products = data;
    });
  }

  get product(): Product {
    if (this._product == null) {
      this._product = new Product();
    }
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get products(): Array<Product> {
    return this._products;
  }

  set products(value: Array<Product>) {
    this._products = value;
  }
}
