import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';
import { EventStatistics } from '../models/event-statistics.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = `${environment.apiUrl}/events`;

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

  updateEvent(eventId: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${eventId}`, event);
  }

  deleteEvent(eventId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${eventId}`);
  }

  getEventStatistics(userId: number): Observable<EventStatistics[]> {
    return this.http.get<EventStatistics[]>(`${this.apiUrl}/statistics/${userId}`);
  }

  getEventStatisticsForEvent(eventId: number): Observable<EventStatistics> {
    return this.http.get<EventStatistics>(`${this.apiUrl}/statistics/event/${eventId}`);
  }

  getEventById(eventId: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${eventId}`);
  }
}
