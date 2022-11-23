import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCartItem } from 'src/models/Product';
import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/orders.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-stores-comparation',
  templateUrl: './stores-comparation.component.html',
  styleUrls: ['./stores-comparation.component.scss'],
})
export class StoresComparationComponent implements OnInit {
  stores: Array<{ storeName: string; storeId: number; totalPrice: number }> =
    [];

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrdersService
  ) {}

  ngOnInit(): void {
    this.cartService.currentCartItems.subscribe((items) => {
      const cartItems = items.map((i) => ({
        productId: i.id,
        quantity: i.quantity,
      }));
      const district = 'surco';

      this.orderService
        .getComparison(cartItems, district)
        .subscribe((data: any) => (this.stores = data));
    });
  }

  selectStore(id: string | number) {
    this.cartService.setStoreId(id);
    this.router.navigateByUrl('/store/checkout');
  }
}
