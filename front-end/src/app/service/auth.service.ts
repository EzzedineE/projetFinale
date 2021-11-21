import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(user: any) {
    return this.http.post('http://localhost:4000/api/auth/register', user);
  }
  login(email: string, password: string) {
    return this.http.post('http://localhost:4000/api/auth/login', {
      email,
      password,
    });
  }
}
