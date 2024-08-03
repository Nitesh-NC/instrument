import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { data_list } from '../assets/data';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, NavBarComponent, RouterModule],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.css',
})
export class ItemDescriptionComponent {
  faArrowLeft = faArrowLeft;

  item: any;

  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private cartService: CartService,
    private path: Router
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.item = data_list.find((item) => item.id === id);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(): void {
    const user = localStorage.getItem('userCredentials');
    if (user) {
      this.cartService.addToCart(this.item);
      this.path.navigate(['/cart']);
    } else {
      alert('login first');
      this.path.navigate(['/login']);
    }
  }
}
