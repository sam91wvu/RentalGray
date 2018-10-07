import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
   userCart = [];
   item: string;

  addToCart(item: string) {
    this.userCart.push(item);
    console.log("this is in the service " + this.userCart)
  }

  removeFromCart(item: string) {
    this.userCart.push(item);
  }

  getShoppingCart(){
    console.log("this is in the service - retreive " + this.userCart)
   return this.userCart;
  }
}
