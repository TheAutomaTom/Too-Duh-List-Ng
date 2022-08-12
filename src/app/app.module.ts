import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './pluralsight/products/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  // BrowserModule exposes *ngIf & *ngFor
  imports: [BrowserModule, FormsModule],
  providers: [],
  // bootstrap = "start-up component" accessed by index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
