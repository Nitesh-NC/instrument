import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  item: any[] = [];

  constructor(private cartService: CartService, private path: Router) {}

  ngOnInit(): void {
    this.item = this.cartService.getItems();
  }

  remove(item: any): void {
    this.cartService.clearCart(item);
    this.item = this.cartService.getItems();
  }

  getTotal() {
    return this.item.reduce((total, item) => total + item.price, 0);
  }

  goPay() {
    this.path.navigate(['/order']);
  }
}
