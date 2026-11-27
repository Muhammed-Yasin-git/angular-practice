import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn:'root'
})

export class ProductService {
    private http = inject(HttpClient)

    private apiUrl = 'https://fakestoreapi.com/products'

    getProducts(){
        return this.http.get(this.apiUrl)
    }

}
