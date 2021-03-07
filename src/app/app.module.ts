import { ProductsData } from './products/products.data';
import { DispensariesData } from './dispensaries/dispensaries.data';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

// Import Component Modules
import { ProductsModule } from './products/products.module';
import { DispensariesModule } from './dispensaries/dispensaries.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DispensariesListComponent } from './dispensaries/dispensaries-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ProductsModule,
    DispensariesModule,
    //InMemoryWebApiModule.forRoot([ProductsData,DispensariesData]),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ], { enableTracing: false }), // true if you want to track it
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
