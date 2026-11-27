import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class ProductsServices {

    private http = inject(HttpClient)

    private apiUrl = 'https://dummyjson.com/products'

    getProducts(){
        return this.http.get(this.apiUrl)
    }
    getProductDetails(id:number){
        return this.http.get(`${this.apiUrl}/${id}`)
    }

}
