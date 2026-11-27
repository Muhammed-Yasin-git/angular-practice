import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsServices } from '../../services/products';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit{
  private router  = inject(Router)

  private productService = inject(ProductsServices)

  products = signal<any[]>([])

  ngOnInit(){
    this.productService.getProducts().subscribe((data:any)=>{
      this.products.set(data.products)
      console.log(this.products)
    })
  }

  viewDetails(id:number){
    this.router.navigate(['/products',id])
  }

}
