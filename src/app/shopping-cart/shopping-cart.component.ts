import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input('cartList') cartList: string[];

  constructor() {}

  ngOnInit() {
  }

  removeFromCart(item) {
    console.log('After removing ' + item + ' from the cart, the cart currently contains: ' + this.cartList);
  }

  }
