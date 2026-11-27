import { Component, inject , OnInit, signal} from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {

  private productService = inject(ProductService)

  products = signal<any[]>([])

   ngOnInit(){
     this.productService.getProducts().subscribe({
      next:(data:any)=>{
        this.products.set(data.products)
      },
      error:(err)=>{
        console.log(err)
      }
     })
   }
}
