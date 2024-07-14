import { Component } from '@angular/core';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component';
import { RouterOutlet } from '@angular/router';
import { UserTopHeaderComponent } from '../user-top-header/user-top-header.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [UserSidebarComponent,UserTopHeaderComponent,RouterOutlet],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
