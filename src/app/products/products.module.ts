// Angular core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Shared
import { SharedModule } from '../shared/shared.module';

// Imports for In Memory DB
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Component Imports
import { ProductsListComponent } from './products-list.component';
import { ProductsDetailComponent } from './products-detail.component';
// import { ProductsEditGuard } from './product-edit.guard';
import { ProductsEditComponent } from './products-edit.component';
import { ProductsData } from './products.data';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductsData),
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:id', component: ProductsDetailComponent },
      {
        path: 'products/:id/edit',
        // canDeactivate: [ProductsEditGuard],
        component: ProductsEditComponent
      }
    ])
  ],
  declarations: [
    ProductsListComponent,
    ProductsEditComponent,
    ProductsDetailComponent
  ],
  exports: [
    FormsModule,
  ]
})
export class ProductsModule { }
