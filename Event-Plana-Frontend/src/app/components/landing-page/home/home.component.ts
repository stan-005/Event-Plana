import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(@Inject(Router) private router: Router) { }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

}
