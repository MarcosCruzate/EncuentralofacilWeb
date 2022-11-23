import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/Product';
import { ProductsService } from '../services/products.service';
import { SellerProductsService } from '../services/seller-products.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-edit-seller-product',
  templateUrl: './edit-seller-product.component.html',
  styleUrls: ['./edit-seller-product.component.scss'],
})
export class EditSellerProductComponent implements OnInit {
  id = '';
  products: Array<Product> = [];
  form: FormGroup = new FormGroup({
    price: new FormControl(0),
    quantity: new FormControl(0),
    productId: new FormControl(''),
  });

  constructor(
    private productService: ProductsService,
    private sellerService: SellerService,
    private sellerProductService: SellerProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));

    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.sellerProductService.getStoreProductById(this.id).subscribe((data) => {
      this.form = new FormGroup({
        price: new FormControl(data.price),
        quantity: new FormControl(data.quantity),
        productId: new FormControl(data.productId),
      });
    });
  }

  onSubmit(data: any) {
    const seller = this.sellerService.getUser();
    const newProduct = {
      ...data.value,
      storeId: seller.id,
    };
    this.sellerProductService
      .updateStoreProduct(this.id, newProduct)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/seller');
        },
      });
  }

  onCancelClick() {
    this.router.navigateByUrl('/seller');
  }
}
