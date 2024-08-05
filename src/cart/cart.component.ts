import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { PROMO } from '../assets/data';
import { FormsModule } from '@angular/forms';

interface cart {
  id: string;
  image: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  item: cart[] = [];
  promoCode: string = '';
  discount: number = 0;
  itemCount: number = 0;
  items = [];

  constructor(private cartService: CartService, private path: Router) {
    
  }

  ngOnInit() {
    this.item = this.cartService.getItems();
    this.itemCount = this.item.length
  }

  remove(item: cart) {
    this.cartService.clearCart(item);
    this.item = this.cartService.getItems();
  }

  getTotal() {
    const subtotal = this.item.reduce((total, item) => total + item.price, 0);
    const deliveryFee = 50;
    const total = subtotal + deliveryFee;
    const discountAmount = (total * this.discount) / 100;
    return total - discountAmount;
  }

  getDiscountAmount() {
    const subtotal = this.item.reduce((total, item) => total + item.price, 0);
    const deliveryFee = 50;
    const total = subtotal + deliveryFee;
    return (total * this.discount) / 100;
  }

  goPay() {
    this.path.navigate(['/order']);
  }

  applyPromoCode() {
    const promo = PROMO.find((p) => p.code === this.promoCode);
    this.discount = promo ? promo.discount : 0;
    alert(`Promo code applied successfully! Discount: Rs ${this.getDiscountAmount()}`);
    this.promoCode=''
  }

  getColorClass(index: number): string {
    const colors = ['bg-white', 'bg-slate-100'];
    return colors[index % colors.length];
  }
  
}
