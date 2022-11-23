import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/models/Product';
import { ProductsService } from '../services/products.service';
import { SellerProductsService } from '../services/seller-products.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-new-seller-product',
  templateUrl: './new-seller-product.component.html',
  styleUrls: ['./new-seller-product.component.scss'],
})
export class NewSellerProductComponent implements OnInit {
  products: Array<Product> = [];
  form = new FormGroup({
    price: new FormControl(0),
    quantity: new FormControl(0),
    productId: new FormControl(''),
  });

  constructor(
    private productService: ProductsService,
    private sellerService: SellerService,
    private sellerProductService: SellerProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }

  onSubmit(data: any) {
    const seller = this.sellerService.getUser();
    const newProduct = {
      ...data.value,
      storeId: seller.id,
    };
    this.sellerProductService.createStoreProduct(newProduct).subscribe({
      next: () => {
        this.router.navigateByUrl('/seller');
      },
    });
  }

  onCancelClick() {
    this.router.navigateByUrl('/seller');
  }
}
