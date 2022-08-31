import { Product } from 'src/types/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'tdl-product-detail',  //Router will get this component
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: Product | undefined;

  constructor(
    // Router service is used access the registered routes, in order to create a link back to the parent list.
    private router: Router,
    //ActivatedRoute gets the route parameter to display details of a specific product.
    private route: ActivatedRoute
  ) {}

  onBack(): void {
    // This is just accessing the known router parameters, and calling a route.
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
  }
}
