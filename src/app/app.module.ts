import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  // bootstrap = "start-up component" accessed by index.html
  // It should only be defined once, and only in the root module.
  bootstrap: [AppComponent],

  declarations: [
    // #1 Only include components, directives, and pipes.
    // #2 Items here are to be declared ONLY ONCE in the app, by only one module.
    AppComponent,
    //ProductListComponent,   // moved to ProductModule
    //ProductDetailComponent, // moved to ProductModule
    HomeComponent,
    NotFoundComponent,
    // Custom pipes should also be included here.
  ],

  imports: [
    BrowserModule, //...*ngIf & *ngFor
    //FormsModule, // moved to ProductModule
    RouterModule.forRoot([
      /* moved to ProductModule's RouterModule.ForChild([])
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
      */
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'NotFoundComponent', pathMatch: 'full' },
    ]),
    HttpClientModule,
    ProductModule,
  ],
  //providers: [
  // Newer syntax is to add an @Injectable decorator on the services that used to go here.
  //],
})
export class AppModule {}
