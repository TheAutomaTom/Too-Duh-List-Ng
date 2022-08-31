import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailGuard } from './product-detail/gaurds/product-detail.guard';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule, // = BrowserModule for child modules
    FormsModule, //... ngModel decorator
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
  ],
})
export class ProductModule {}
