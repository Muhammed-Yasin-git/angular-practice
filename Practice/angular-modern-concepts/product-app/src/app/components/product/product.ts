import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { CreateProduct, ProductInterface } from '../../interfaces/product-interface';

@Component({
  imports: [],
  selector: 'app-product',
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class Product implements OnInit {
  loading = signal(true);
  error = signal('');

  private productService = inject(ProductService);

  products = signal<ProductInterface[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        this.loading.set(false);
        console.log(this.loading());
        this.products.set(data.products);
      },
      error: (err) => {
        this.loading.set(false);
          this.error.set('product fetching failed');
          console.log(err);
      },
    });
  }
  addProduct() {
    const product: CreateProduct = {
      title: 'Gaming Laptop',
      price: 75000,
      description: 'High perfomance gaming laptop',
      category: 'laptop',
    };

    this.productService.addProducts(product).subscribe({
      next: (data: any) => {
        this.products.set([...this.products(), data]);
        console.log(data); 
      },
    });
  }

  editProduct(id: number) {
    const updatedProduct: CreateProduct = {
      title: 'Updated Gaming Laptop',
      price: 75000,
      description: 'High perfomance gaming laptop',
      category: 'laptop',
    };

    this.productService.updateProduct(id, updatedProduct).subscribe({
      next: (data: ProductInterface) => {
        this.products.update((products) =>
          products.map((product) => (product.id === id ? data : product)),
        );
        console.log('updatedData', data);
      },
      error: (err) => {
        console.log('updated failed', err);
      },
    });
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe({
      next:(data: ProductInterface) =>{
        this.products.update((products)=>
        products.filter(product => product.id !== id ))
        console.log('deleted', data)
      },
      error:(err)=>{
        console.log('delete failed',err)
      }
    })
  }
}
