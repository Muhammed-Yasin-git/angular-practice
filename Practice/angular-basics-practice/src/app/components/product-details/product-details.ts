import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServices } from '../../services/products';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductsServices);

  product = signal<any>(null)

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductDetails(id).subscribe((data: any) => {
      this.product.set(data);
      console.log(data);
    });
  }
}