import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

  private service = inject(ProductService)

  products: any[] = []

  ngOnInit(){
    this.service.getProducts().subscribe((data:any)=>{
      this.products = data
      console.log('hello',data)
    })
  }
}
