import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private baseUrl = 'http://localhost:3000/api/admin';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIxOTAwMTUxLCJleHAiOjE3MjE5MTQ1NTF9.l2JQUhJhCO5VOYn8OYXwDOIXLsfZoTdf65RgKFjK6ag';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`, { headers: this.getHeaders() });
  }

  updateUserRole(userId: number, role: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/role`, { userId, role }, { headers: this.getHeaders() });
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${userId}`, { headers: this.getHeaders() });
  }
}
