import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    const body = {
      email,
      password,
    };

    return this.http.post<any>('http://localhost:8080/clients/login', body);
  }

  public fetchClientInfo(id: string | number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/clients/${id}`);
  }

  public update(id: string | number, user: User) {
    return this.http.put<void>(`http://localhost:8080/clients/${id}`, user);
  }

  public register(user: User): Observable<void> {
    return this.http.post<void>('http://localhost:8080/clients', user);
  }
}
