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
  organizerId!: number; // Initialize as undefined initially

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.organizerId = +id; // Convert the string to a number
        this.fetchEventStatistics();
      }
    });
  }

  fetchEventStatistics(): void {
    if (this.organizerId) {
      this.eventService.getEventStatistics(this.organizerId).subscribe((statistics) => {
        this.eventStatistics = statistics;
      });
    }
  }
}
