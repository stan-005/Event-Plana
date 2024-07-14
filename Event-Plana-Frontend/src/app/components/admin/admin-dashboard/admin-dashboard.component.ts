import { Component } from '@angular/core';
import { AdminTopHeaderComponent } from "../admin-top-header/admin-top-header.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [AdminTopHeaderComponent, AdminSidebarComponent, RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
