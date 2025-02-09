import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];
  userId: number = 1; // Example userId, replace with actual logged-in userId

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.http.get<any[]>(`http://localhost:3000/api/bookings/user/${this.userId}`).subscribe(
      response => {
        this.bookings = response;
      },
      error => console.error('Error fetching bookings', error)
    );
  }

  cancelBooking(bookingId: number): void {
    this.http.patch(`http://localhost:3000/api/bookings/${bookingId}`, {}).subscribe(
      response => {
        console.log('Booking cancelled', response);
        this.fetchBookings(); // Refresh bookings list
      },
      error => console.error('Error cancelling booking', error)
    );
  }
}
