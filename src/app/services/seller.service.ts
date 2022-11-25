import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

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

  public update(id: string | number, user: any) {
    return this.http.put(`http://localhost:8080/stores/${id}`, user).pipe(
      tap(() => {
        this.setUser(user);
      })
    );
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
