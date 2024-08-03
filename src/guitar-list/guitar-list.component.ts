import { Component } from '@angular/core';
import { guitar } from '../assets/data';
import { CommonModule } from '@angular/common';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-guitar-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule,NavBarComponent],
  templateUrl: './guitar-list.component.html',
  styleUrl: './guitar-list.component.css'
})
export class GuitarListComponent {
  guitar = guitar
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  getStars(rating: number) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push({ icon: this.faStar, class: 'text-yellow-500' });
    }

    if (halfStars) {
      stars.push({ icon: this.faStarHalfStroke, class: 'text-yellow-500' });
    }

    return stars;
    
  }

  constructor(private router: Router){}

  redirect(id: string){
    this.router.navigate(['/desc',id])
  }

}
