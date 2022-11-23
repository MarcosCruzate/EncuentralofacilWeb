import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss'],
})
export class OrdersHistoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'total'];
  dataSource: any = [];

  constructor(
    private orderService: OrdersService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    const user = this.userService.getUser();
    if (user) {
      this.orderService
        .getOrders(user.id)
        .subscribe((data) => (this.dataSource = data));
    }
  }
}
