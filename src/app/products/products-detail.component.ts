import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './products';
import { ProductsService } from './products-service';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle = 'Product Details';
  errorMessage = '';
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    console.log(param);
    if (param) {
      const id = +param;
      this.getProduct(id);
      console.log(id);
    }
  }

  getProduct(id: number) {
    this.productsService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
    // console.log(product);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
