import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons';
import { faInstagram} from  '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faPhone} from  '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 
  faCopyright=faCopyright;
  faFacebook=faFacebook;
  faInstagram= faInstagram;
  faEnvelope=faEnvelope;
  faTwitter=faTwitter;
  faPhone=faPhone;
 

}


