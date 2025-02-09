import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { EventStatistics } from '../../../models/event-statistics.model';

@Component({
  selector: 'app-organizer-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organizer-content.component.html',
  styleUrls: ['./organizer-content.component.css']
})
export class OrganizerContentComponent implements OnInit {
  eventStatistics: EventStatistics[] = [];
  userId!: number; // Initialize as undefined initially

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Subscribe to route params to get the userId
    this.route.paramMap.subscribe(params => {
      const id = localStorage.getItem('userId');
      if (id) {
        this.userId = +id; // Convert the string to a number
        this.fetchEventStatistics(); // Fetch statistics when ID is available
      }
    });
  }

  fetchEventStatistics(): void {
    if (this.userId) {
      // Call the service to get event statistics
      this.eventService.getEventStatistics(this.userId).subscribe((statistics) => {
        this.eventStatistics = statistics;
      }, (error) => {
        console.error('Failed to fetch event statistics', error);
      });
    }
  }
}
