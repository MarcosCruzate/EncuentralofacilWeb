import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  public registerSeller(seller: any) {
    return this.http.post<void>('http://localhost:8080/stores', seller);
  }

  public login(email: string, password: string) {
    return this.http.post<void>('http://localhost:8080/stores/login', {
      email,
      password,
    });
  }

  public setUser(user: any) {
    localStorage.setItem('seller-user', JSON.stringify(user));
  }

  public getUser() {
    const user = localStorage.getItem('seller-user');
    return user ? JSON.parse(user) : null;
  }

  public removeUser() {
    localStorage.removeItem('seller-user');
  }
}
