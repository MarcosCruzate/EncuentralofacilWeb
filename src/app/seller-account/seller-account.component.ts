import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { districts } from '../constants/districts';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-account',
  templateUrl: './seller-account.component.html',
  styleUrls: ['./seller-account.component.scss'],
})
export class SellerAccountComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  districts = districts;
  user: any = null;

  constructor(private sellerService: SellerService) {}

  ngOnInit(): void {
    const user = this.sellerService.getUser();

    if (user) {
      this.user = user;
      this.form = new FormGroup({
        name: new FormControl(user.name),
        district: new FormControl(user.district),
        email: new FormControl(user.email),
        password: new FormControl(user.password),
      });
    }
  }

  onSubmit(data: FormGroup) {
    if (this.user && this.user.id) {
      const { id } = this.user;
      this.sellerService.update(id, data.value).subscribe(() => {});
    }
  }
}
