import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image, User } from '../models/userModel';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(user: User) {
    return this.http.post('http://localhost:4000/api/auth/register', user);
  }
  login(email: string, password: string) {
    return this.http.post('http://localhost:4000/api/auth/login', {
      email,
      password,
    });
  }
  onUpload(image: Image) {
    return this.http.post('http://localhost:4000/api/upload//single', image);
  }
}
