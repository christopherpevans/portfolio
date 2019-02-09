import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];

  constructor() { }

  addToCart(total: number) {
    this.cart.push(total);
    console.log(this.cart);
  }

}
