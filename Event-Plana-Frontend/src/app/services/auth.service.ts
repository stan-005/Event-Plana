import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/users'; // Base URL for user-related endpoints

  constructor(private http: HttpClient) {}

  // Register a new user
  register(user: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  // Login with user credentials
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/password-reset/request`, { email });
  }

  confirmPasswordReset(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/password-reset/reset`, { token, newPassword });
  }
}
