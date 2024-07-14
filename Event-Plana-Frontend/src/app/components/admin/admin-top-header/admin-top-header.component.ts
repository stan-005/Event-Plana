import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-top-header',
  standalone: true,
  imports: [],
  templateUrl: './admin-top-header.component.html',
  styleUrl: './admin-top-header.component.css'
})
export class AdminTopHeaderComponent {

}
// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service'; // Example service for authentication

// @Component({
//   selector: 'app-admin-top-header',
//   templateUrl: './admin-top-header.component.html',
//   styleUrls: ['./admin-top-header.component.css']
// })
// export class AdminTopHeaderComponent implements OnInit {
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
