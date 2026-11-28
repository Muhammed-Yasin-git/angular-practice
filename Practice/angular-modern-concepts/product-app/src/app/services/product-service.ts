import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateProduct, ProductInterface } from '../interfaces/product-interface';
import { ProductResponse } from '../interfaces/product-response';
import { SKIP_AUTH } from './http-context';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://dummyjson.com/products';

   

  getProducts() {

    //Http Params
    const params = new HttpParams()
    .set('limit',5).set('skip',5)

    //Http Headers
    const headers =  new HttpHeaders()
    .set('Authorization', 'Bearer my-token');

    //Http Context
    const context = new HttpContext()
    .set(SKIP_AUTH, true)

    //GET
    return this.http.get<ProductResponse>(this.apiUrl, { params, headers, context });
  }

  //POST
  addProducts(product: CreateProduct) {
    return this.http.post<ProductInterface>(`${this.apiUrl}/add`, product);
  }

  //PUT
  updateProduct(id: number, updatedProduct: CreateProduct) {
    return this.http.put<ProductInterface>(`${this.apiUrl}/${id}`, updatedProduct);
  }

  deleteProduct(id: number){
    return this.http.delete<ProductInterface>(`${this.apiUrl}/${id}`)
  }
}
