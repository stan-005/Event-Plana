import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { RouterLink } from '@angular/router';
import { EventDetailsComponent } from '../../organizer/event-details/event-details.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, EventDetailsComponent],
})
export class EventsComponent implements OnInit {
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

  viewDetails(eventId: string): void {
    this.router.navigate(['events/:id', eventId]);
  }
}
