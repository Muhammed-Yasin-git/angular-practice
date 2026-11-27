import { ProductInterface } from './product-interface';

export interface ProductResponse {
  products: ProductInterface[];
  total: number;
  skip: number;
  limit: number;
}