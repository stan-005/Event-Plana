import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { AboutComponent } from '../../about/about.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AboutComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
