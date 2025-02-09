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
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }

  // Login with user credentials
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  // Request password reset
  requestPasswordReset(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/password-reset/request`, { email });
  }

  // Confirm password reset
  confirmPasswordReset(token: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/password-reset/reset`, { token, newPassword });
  }
}
