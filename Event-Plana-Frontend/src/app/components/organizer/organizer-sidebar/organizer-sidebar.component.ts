import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-organizer-sidebar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './organizer-sidebar.component.html',
  styleUrl: './organizer-sidebar.component.css'
})
export class OrganizerSidebarComponent {
  showLogoutModal = false;

  constructor(@Inject(Router) private router: Router) {}

  openLogoutModal(): void {
    this.showLogoutModal = true;
  }

  closeLogoutModal(): void {
    this.showLogoutModal = false;
  }

  confirmLogout(): void {
    // Implement your logout logic here, e.g., clear user session
    this.showLogoutModal = false;
    this.router.navigate(['/login']);
  }
}
