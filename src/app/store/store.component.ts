import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public title = 'SportsStore';

  constructor(private repository: ProductRepository) { }

  ngOnInit(): void {
  }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
}
