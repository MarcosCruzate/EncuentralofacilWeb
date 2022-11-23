import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  public getComparison(
    cartItems: Array<{ productId: string | number; quantity: number }>,
    district: string
  ) {
    return this.http.post<{
      storeId: number;
      storeName: string;
      totalPrice: number;
    }>(`http://localhost:8080/stores-products/comparison`, {
      cartItems,
      district,
    });
  }

  public createOrder(
    cartItems: Array<{ productId: string | number; quantity: number }>,
    storeId: number | string,
    clientId: number | string
  ) {
    return this.http.post('http://localhost:8080/orders', {
      cartItems,
      storeId,
      clientId,
    });
  }

  public getOrders(clientId: string | number) {
    let params = new HttpParams();
    params = params.set('clientId', clientId);

    return this.http.get('http://localhost:8080/orders', {
      params,
    });
  }
}
