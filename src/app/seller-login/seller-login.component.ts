import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss'],
})
export class SellerLoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(data: FormGroup) {
    this.sellerService
      .login(data.value.email, data.value.password)
      .subscribe({
        next: (data) => {
          this.sellerService.setUser(data);
          this.router.navigateByUrl('/seller');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
