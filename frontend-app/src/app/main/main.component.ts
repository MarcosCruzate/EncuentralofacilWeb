import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { Product, ProductCartItem } from 'src/models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products: Array<Product> = [];
  categories: Array<Category> = [];
  cartItems: Array<ProductCartItem> = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));

    this.productsService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  onLinkClick(categoryId: string) {
    this.productsService
      .getProducts(categoryId)
      .subscribe((products) => (this.products = products));
  }

  onProductClick(product: Product) {
    const itemIndex = this.cartItems.findIndex(item => item.id === product.id);

    if (itemIndex !== -1) {
      this.cartItems[itemIndex].quantity += 1;
    } else {
      this.cartItems.push({
        quantity: 1,
        ...product,
      });
    }
  }

  onDeleteItem(id: any) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }
}
