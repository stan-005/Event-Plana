import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
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
