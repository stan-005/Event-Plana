import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {
  userStatistics: any = {};
  eventStatistics: any = {};
  specificEventStatistics: any = {};
  selectedEventId: number = 0;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getUserStatistics();
    this.getEventStatistics();
  }

  getUserStatistics(): void {
    this.adminService.getUserStatistics().subscribe(
      data => this.userStatistics = data,
      error => console.error('Error fetching user statistics', error)
    );
  }

  getEventStatistics(): void {
    this.adminService.getEventStatistics().subscribe(
      data => this.eventStatistics = data,
      error => console.error('Error fetching event statistics', error)
    );
  }

  getSpecificEventStatistics(): void {
    if (this.selectedEventId) {
      this.adminService.getSpecificEventStatistics(this.selectedEventId).subscribe(
        data => this.specificEventStatistics = data,
        error => console.error('Error fetching specific event statistics', error)
      );
    }
  }
}
