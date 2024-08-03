import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import{faTwitter, fa42Group} from '@fortawesome/free-brands-svg-icons';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  faCoffee = faCoffee
  faTwitter = faTwitter
  fa42Group = fa42Group
  faCartShopping = faCartShopping
  faMagnifyingGlass = faMagnifyingGlass
}
