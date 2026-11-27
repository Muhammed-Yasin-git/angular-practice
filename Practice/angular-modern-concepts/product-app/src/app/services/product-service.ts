import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateProduct, ProductInterface } from '../interfaces/product-interface';
import { ProductResponse } from '../interfaces/product-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://dummyjson.com/products';

   

  getProducts() {

    const params = new HttpParams()
    .set('limit',5).set('skip',5)

    const headers =  new HttpHeaders()
    .set('Authorization', 'Bearer my-token');

    return this.http.get<ProductResponse>(this.apiUrl, { params, headers });
  }

  addProducts(product: CreateProduct) {
    return this.http.post<ProductInterface>(`${this.apiUrl}/add`, product);
  }

  updateProduct(id: number, updatedProduct: CreateProduct) {
    return this.http.put<ProductInterface>(`${this.apiUrl}/${id}`, updatedProduct);
  }

  deleteProduct(id: number){
    return this.http.delete<ProductInterface>(`${this.apiUrl}/${id}`)
  }
}
