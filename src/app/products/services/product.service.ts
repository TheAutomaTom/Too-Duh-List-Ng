import { Injectable } from '@angular/core';
import { Product } from '../../../types/products';

@Injectable({
  //Notes on dependency Injection...
  providedIn: 'root', // creates singleton
  // 1. This could also be declared at the module (old syntax)
  // 2. To bind to component instances, add
  //    providers: [ProductService] in @Component declaration
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        sku: 'HT-4000',
        categories: ['Hand-Tools'],
        desc: 'Hammer',
        price: 6.99,
        qty: 5,
      },
      {
        sku: 'PN-7500',
        categories: ['Pneumatic'],
        desc: 'Nail Gun',
        price: 45.0,
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
        price: 52.0,
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
  }
}
