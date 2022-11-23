import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/orders.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartItems: Array<any> = [];
  storeId: number | string = '';

  constructor(
    private router: Router,
    private cartService: CartService,
    private userService: UsersService,
    private orderService: OrdersService
  ) {}

  ngOnInit(): void {
    this.cartService.currentCartItems.subscribe(
      (items) =>
        (this.cartItems = items.map((i) => ({
          productId: i.id,
          quantity: i.quantity,
        })))
    );
    this.cartService.storeId.subscribe((storeId) => (this.storeId = storeId));
  }

  createOrder() {
    const user = this.userService.getUser();

    if (user) {
      const clientId = user.id;
      this.orderService
        .createOrder(this.cartItems, this.storeId, clientId)
        .subscribe((response) => {
          this.cartService.setStoreId('');
          this.cartService.setCartItems([]);
          this.router.navigateByUrl('/store/success');
        });
    }
  }
}
