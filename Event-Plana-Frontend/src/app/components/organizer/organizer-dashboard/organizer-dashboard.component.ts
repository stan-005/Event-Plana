import { Component } from '@angular/core';
import { OrganizerSidebarComponent } from "../organizer-sidebar/organizer-sidebar.component";
import { OrganizerTopHeaderComponent } from "../organizer-top-header/organizer-top-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-organizer-dashboard',
  standalone: true,
  imports: [OrganizerSidebarComponent, OrganizerTopHeaderComponent, RouterOutlet],
  templateUrl: './organizer-dashboard.component.html',
  styleUrl: './organizer-dashboard.component.css'
})
export class OrganizerDashboardComponent {

}
