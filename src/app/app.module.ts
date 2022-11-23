import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './main/main.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { StoresComparationComponent } from './stores-comparation/stores-comparation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { SucessOrderComponent } from './sucess-order/sucess-order.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerAccountComponent } from './seller-account/seller-account.component';
import { SellerComponent } from './seller/seller.component';
import { RegisterSellerComponent } from './register-seller/register-seller.component';
import { MatSelectModule } from '@angular/material/select';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { NewSellerProductComponent } from './new-seller-product/new-seller-product.component';
import { EditSellerProductComponent } from './edit-seller-product/edit-seller-product.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    ProductCardComponent,
    StoresComparationComponent,
    CheckoutComponent,
    StoreComponent,
    SucessOrderComponent,
    CustomerAccountComponent,
    SellerLoginComponent,
    SellerAccountComponent,
    SellerComponent,
    RegisterSellerComponent,
    SellerProductsComponent,
    NewSellerProductComponent,
    EditSellerProductComponent,
    OrdersHistoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
