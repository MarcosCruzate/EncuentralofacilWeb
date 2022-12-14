import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCartItem } from 'src/models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = new BehaviorSubject<Array<ProductCartItem>>([]);
  currentCartItems = this.items.asObservable();

  private _storeId = new BehaviorSubject<number | string>('');
  storeId = this._storeId.asObservable();

  constructor() {}

  setCartItems(items: Array<ProductCartItem>) {
    this.items.next(items);
  }

  setStoreId(storeId: number | string) {
    this._storeId.next(storeId);
  }
}
