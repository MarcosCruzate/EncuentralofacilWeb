import { Component, OnInit } from '@angular/core';
import { StoreProduct } from 'src/models/StoreProduct';
import { SellerProductsService } from '../services/seller-products.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss'],
})
export class SellerProductsComponent implements OnInit {
  sellerProducts: Array<StoreProduct> = [];
  constructor(
    private sellerProductsService: SellerProductsService,
    private sellerService: SellerService
  ) {}

  ngOnInit(): void {
    const store = this.sellerService.getUser();

    if (store)
      this.sellerProductsService
        .getStoreProducts(store.id)
        .subscribe((d) => (this.sellerProducts = d));
  }

  deleteStoreProduct(id: any) {}
}
