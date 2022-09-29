import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public register(user: User): Observable<void> {
    return this.http.post<void>('http://localhost:3000/users', user);
  }

  public getUser(email: string, password: string): Observable<User> {
    const body = {
      email,
      password,
    };

    return this.http.post<User>('http://localhost:3000/login', body);
  }
}
