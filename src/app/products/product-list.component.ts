import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/types/products';
import { ProductService } from './services/product.service';

@Component({
  selector: 'pluralsight-products',
  templateUrl: 'product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}
  subscription!: Subscription;
  products: Product[] = [];
  department = { name: 'Tool' };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    // Subscribe runs as async
    this.subscription = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this._filterApplied = 'All';
      },
      error: (err) => console.error(err),
      //Note: Http Requests only emit once, so 'next' occurs on completion
      // complete: ...
    });

    // This would run too early here, because we can't 'await' subscriptions
    // this._filterApplied = 'All';
  }

  _filterApplied = '';
  get filterApplied(): string {
    return this._filterApplied;
  }
  set filterApplied(value: string) {
    this._filterApplied = value;
  }
  filteredProducts(): Product[] {
    if (this.filterApplied === 'All') {
      return this.products;
    }
    return this.products.filter((product) =>
      product.categories.includes(this.filterApplied)
    );
  }

  cart: Product[] = [
    {
      sku: 'FAS-200',
      categories: ['Fasteners', 'Nails'],
      desc: 'Nails 2"',
      price: 0.01,
      qty: 5,
    },
  ];
  getFilters(): string[] {
    let filters: string[] = ['All'];
    this.products.forEach((product) => {
      product.categories.forEach((category) => {
        const recorded = filters.indexOf(category) > -1;
        if (!recorded) filters.push(category);
      });
    });
    return filters;
  }

  addToCart(product: Product) {
    let isInCart: boolean = false;

    this.cart.forEach((purchase) => {
      if (purchase.sku == product.sku) {
        isInCart = true;
        purchase.qty++;
      }
    });

    if (isInCart === false) {
      this.cart.push({
        sku: product.sku,
        categories: product.categories,
        desc: product.desc,
        price: product.price,
        qty: 1,
      });
    }
  }

  cartSubTotal(): number {
    let total = 0;
    this.cart.forEach((product) => {
      total += product.price * product.qty;
    });
    return total;
  }

  // Pipes have built in currency convertors:
  // ex: {{ value | currency: "USD":"symbol-narrow":"1.2-2"}}
  // toCurrency = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // });
}
