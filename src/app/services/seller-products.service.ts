import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreProduct } from 'src/models/StoreProduct';

@Injectable({
  providedIn: 'root',
})
export class SellerProductsService {
  constructor(private http: HttpClient) {}

  public getStoreProducts(storeId: string) {
    return this.http.get<Array<StoreProduct>>(
      `http://localhost:8080/stores-products?storeId=${storeId}`
    );
  }

  public createStoreProduct(storeProduct: StoreProduct) {
    return this.http.post<void>(
      'http://localhost:8080/stores-products',
      storeProduct
    );
  }

  public getStoreProductById(id: string | number) {
    return this.http.get<StoreProduct>(
      `http://localhost:8080/stores-products/${id}`
    );
  }

  public updateStoreProduct(id: string | number, storeProduct: StoreProduct) {
    return this.http.put<void>(
      `http://localhost:8080/stores-products/${id}`,
      storeProduct
    );
  }
}
