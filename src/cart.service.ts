import { Injectable } from '@angular/core';

interface cart {
  id: string;
  image: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'cartItem';

  constructor() {
    this.loadItems();
  }

  addToCart(item: cart) {
    const items = this.getItems();
    items.push(item);
    this.saveItems(items);
  }

  getItems() {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  clearCart(item: cart) {
    let items = this.getItems();
    // items = items.filter((i: cart) => i.name !== item.name || i.price !== item.price || i.image !== item.image)
    const index = items.findIndex((i: cart) => i.id === item.id);
    items.splice(index);
    this.saveItems(items);
  }

  private saveItems(items: cart[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  private loadItems() {
    const items = localStorage.getItem(this.storageKey);
    if (!items) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }
}
