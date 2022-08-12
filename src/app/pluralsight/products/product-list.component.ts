import { Component, OnInit } from '@angular/core';
import { Product } from 'src/types/products';

@Component({
  selector: 'pluralsight-products',
  templateUrl: 'product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  department = { name: 'Tool' };
  products: Product[] = [
    {
      sku: 'HT-4000',
      categories: ['Hand-Tools'],
      desc: 'Hammer',
      price: 5.0,
      qty: 5,
    },
    {
      sku: 'PN-7500',
      categories: ['Pneumatic'],
      desc: 'Nail Gun',
      price: 54.0,
      qty: 5,
    },
    {
      sku: 'EL-120v',
      categories: ['Corded'],
      desc: 'Drill/Driver',
      price: 33.0,
      qty: 5,
    },
    {
      sku: 'BP-18v',
      categories: ['Battery'],
      desc: 'Drill/Driver',
      price: 33.0,
      qty: 5,
    },
    {
      sku: 'FN-150',
      categories: ['Fasteners', 'Nails'],
      desc: 'Nail 1-1/2"',
      price: 0.04,
      qty: 250,
    },
    {
      sku: 'FN-200',
      categories: ['Fasteners', 'Nails'],
      desc: 'Nails 2"',
      price: 0.01,
      qty: 600,
    },
    {
      sku: 'FS-250',
      categories: ['Fasteners', 'Screws'],
      desc: 'Screws 2-1/2"',
      price: 0.09,
      qty: 1000,
    },
  ];

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

  ngOnInit(): void {
    this._filterApplied = 'All';
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
