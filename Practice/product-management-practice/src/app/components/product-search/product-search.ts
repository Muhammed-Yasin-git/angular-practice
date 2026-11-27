import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductSearchService } from '../../services/product-search-service';
import { AsyncPipe } from '@angular/common';

@Component({
imports: [FormsModule, AsyncPipe],
  selector: 'app-product-search',
  styleUrl: './product-search.css',
  templateUrl: './product-search.html',
})
export class ProductSearch {
  private productSearchService = inject(ProductSearchService);

  searchTerm = '';

  products$ = this.productSearchService.search$;

  onSearch() {
    this.productSearchService.searchProducts(this.searchTerm);
  }
}
