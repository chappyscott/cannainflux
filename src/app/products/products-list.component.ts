import { Component, OnInit } from '@angular/core';

import { Product } from './products';
import { ProductsService } from './products-service';


@Component({
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  pageTitle = 'Product Inventory';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
}

