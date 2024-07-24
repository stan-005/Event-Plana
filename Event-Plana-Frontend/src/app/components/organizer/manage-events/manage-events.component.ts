import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ManageEventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
    });
  }

  addEvent(): void {
    this.router.navigate(['events/create']);
  }

  editEvent(eventId: number | undefined): void {
    if (eventId !== undefined) {
      this.router.navigate([`/events/edit/${eventId}`]);
    }
  }

  viewEvent(eventId: number | undefined): void {
    if (eventId !== undefined) {
      this.router.navigate([`/events/${eventId}`]);
    }
  }

  deleteEvent(eventId: number | undefined): void {
    if (eventId !== undefined) {
      this.eventService.deleteEvent(eventId).subscribe(() => {
        this.events = this.events.filter((event) => event.id !== eventId);
      });
    }
  }
}
