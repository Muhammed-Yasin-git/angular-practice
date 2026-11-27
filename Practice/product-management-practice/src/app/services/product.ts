import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class ProductService {
    private http = inject(HttpClient)

    private apiUrl = 'https://jsonplaceholder.typicode.com/users'

    getUsers(){
        return this.http.get(this.apiUrl)
    }
    
}



