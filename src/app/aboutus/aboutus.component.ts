import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [FooterComponent,NavBarComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
