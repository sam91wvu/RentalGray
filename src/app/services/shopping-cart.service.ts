import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
   userCart = [];
   found: number;
   item: string;

  addToCart(item: string) {
    this.userCart.push(item);
  }

  removeFromCart(item: string) {
     this.found = this.userCart.indexOf(item);

    if ( this.found !== -1) {
      this.userCart.splice( this.found, 1);
    }
  }

  getShoppingCart() {
   return this.userCart;
  }
}
