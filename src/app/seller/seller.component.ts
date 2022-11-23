import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent implements OnInit {
  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.sellerService.removeUser();
    this.router.navigateByUrl('/login-vendedor');
  }
}
