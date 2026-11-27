import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';

interface ProductResponse {
  products: any[];
}

@Injectable({
  providedIn: 'root',
})



export class ProductSearchService {
  private searchSubject = new Subject<string>();
  private http = inject(HttpClient);

  
  search$ = this.searchSubject.pipe(
  debounceTime(500),
  distinctUntilChanged(),
  switchMap(term => {
    if (!term.trim()) {
      return of({ products: [] });
    }

    return this.http.get<ProductResponse>(
      `https://dummyjson.com/products/search?q=${term}`
    );
  })
);

searchProducts(term: string) {
  this.searchSubject.next(term);
}
}
