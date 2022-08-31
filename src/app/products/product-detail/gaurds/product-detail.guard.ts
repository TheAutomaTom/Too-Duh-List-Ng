import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = route.paramMap.get('id');

    // ***
    //This is where we would check to see if the route param is valid.
    // This is just dummy code to implement a guard...
    if (id == '' || id == 'TestFailCondition') {
      alert('Invalid product id');
      this.router.navigate(['/products']);
      return false;
    }
    //  TODO:  How can I use product-list's SKUs to actually validate this id?
    // ***

    return true;
  }
}
