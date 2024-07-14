import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from "../../shared/footer/footer.component";
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent,AboutComponent,EventsComponent,ContactComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
