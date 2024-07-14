import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/footer/footer.component";

import { HeaderComponent } from '../../../shared/header/header.component';
import { EventsComponent } from '../../events/events.component';

@Component({
  selector: 'app-event-page',
  standalone: true,
  imports: [FooterComponent, EventsComponent,HeaderComponent],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.css'
})
export class EventPageComponent {

}
