import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [AppComponent, VoteComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
