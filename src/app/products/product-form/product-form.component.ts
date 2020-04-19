import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../controllers/services/product.service';
import {Product} from '../../controllers/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  get product(): Product {
    return this.productService.product;
  }

  public save() {
    if (this.productService.product.id != null) {
      this.productService.update();
    }
    else {
      this.productService.save();
    }
  }
}
