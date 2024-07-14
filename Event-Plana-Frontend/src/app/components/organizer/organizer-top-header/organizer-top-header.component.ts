import { Component } from '@angular/core';

@Component({
  selector: 'app-organizer-top-header',
  standalone: true,
  imports: [],
  templateUrl: './organizer-top-header.component.html',
  styleUrl: './organizer-top-header.component.css'
})
export class OrganizerTopHeaderComponent {

}
// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service'; // Example service for authentication

// @Component({
//   selector: 'app-organizer-top-header',
//   templateUrl: './organizer-top-header.component.html',
//   styleUrls: ['./organizer-top-header.component.css']
// })
// export class OrganizerTopHeaderComponent implements OnInit {
//   profileDropdownVisible = false;

//   constructor(private authService: AuthService) { }

//   ngOnInit(): void { }

//   toggleProfileDropdown(): void {
//     this.profileDropdownVisible = !this.profileDropdownVisible;
//   }

//   logout(): void {
//     this.authService.logout();
//     // Redirect to login page or handle logout
//   }
// }
