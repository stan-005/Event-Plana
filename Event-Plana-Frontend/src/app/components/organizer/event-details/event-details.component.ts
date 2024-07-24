import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service'; // Ensure you have this service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(eventId)) {
      this.eventService.getEventById(eventId).subscribe(
        (event) => {
          this.event = event;
        },
        (error) => {
          console.error('Error fetching event details', error);
        }
      );
    } else {
      console.error('Invalid event ID');
    }
  }
}
