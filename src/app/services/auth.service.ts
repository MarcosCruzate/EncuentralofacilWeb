import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ClientService } from './client.service';
import { SellerService } from './seller.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticatedUser = new BehaviorSubject<{
    isAuth: boolean;
    user: any;
    type: 'client' | 'seller' | null;
  }>({
    isAuth: false,
    user: null,
    type: null,
  });

  authenticatedUser = this._authenticatedUser.asObservable();

  constructor(
    private sellerService: SellerService,
    private clientService: ClientService
  ) {
    const clientUser = this.getUser('client');
    const sellerUser = this.getUser('seller');
  }

  clientLogin(email: string, password: string) {
    return this.clientService.login(email, password).pipe(
      tap((response: any) => {
        this._authenticatedUser.next({
          isAuth: true,
          user: response,
          type: 'client',
        });
        localStorage.setItem('client_auth', JSON.stringify(response));
      })
    );
  }

  sellerLogin(email: string, password: string) {
    return this.sellerService.login(email, password).pipe(
      tap((response: any) => {
        this._authenticatedUser.next({
          isAuth: true,
          user: response,
          type: 'seller',
        });
        localStorage.setItem('seller_auth', JSON.stringify(response));
      })
    );
  }

  updateSeller() {}

  updateClient(id: string | number, client: any) {
    return this.clientService.update(id, client).pipe(
      tap((response: any) => {
        const currentUser = this._authenticatedUser.value;
        this._authenticatedUser.next({
          isAuth: true,
          user: {
            ...currentUser,
            ...client,
          },
          type: 'client',
        });
        localStorage.setItem('client_auth', JSON.stringify(response));
      })
    );
  }

  getUser(type: 'client' | 'seller') {
    let key = '';

    if (type === 'client') {
      key = 'client_auth';
    } else if (type === 'seller') {
      key = 'seller_auth';
    }

    const user = localStorage.getItem(key);
    return user ? JSON.parse(user) : null;
  }

  logout() {
    this._authenticatedUser.next({
      isAuth: false,
      user: null,
      type: null,
    });

    localStorage.removeItem('seller_auth');
    localStorage.removeItem('client_auth');
  }
}
