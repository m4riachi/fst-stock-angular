import { Component, OnInit } from '@angular/core';
import {Product} from '../../controllers/models/product.model';
import {ProductService} from '../../controllers/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll();
  }

  get products(): Array<Product> {
    return this.productService.products;
  }

  public update(product: Product) {
    this.productService.product = this.clone(product);
  }

  public delete(id: number, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.productService.delete(id, index);
    }
  }

  private clone(product: Product){
    const p = new Product();
    p.id = product.id;
    p.name = product.name;
    p.quantity = product.quantity;
    p.price = product.price;
    return p;
  }
}
