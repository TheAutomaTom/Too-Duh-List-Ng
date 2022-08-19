import { Injectable } from '@angular/core';
import { Product } from '../../../types/products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
@Injectable({
  //Notes on dependency Injection...
  providedIn: 'root', // creates singleton
  // 1. This could also be declared at the module (old syntax)
  // 2. To bind to component instances, add
  //    providers: [ProductService] in @Component declaration
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private _mockUrl = '../../../assets/mockApi/products.json';
  getProducts(): Observable<Product[]> {
    console.log(this._mockUrl);

    return this.http.get<Product[]>(this._mockUrl).pipe(
      //tap reads data but cannot alter anything
      tap((data) => console.log('All Products: ', JSON.stringify(data))),
      //pipe can chain functions to create a workflow
      catchError(this._handleError)
    );
  }

  private _handleError(err: HttpErrorResponse) {
    return throwError(() => 'Error at service!');
  }
}
