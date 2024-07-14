import { Component } from '@angular/core';
import { ContactComponent } from "../../contact/contact.component";
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent,HeaderComponent,FooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
