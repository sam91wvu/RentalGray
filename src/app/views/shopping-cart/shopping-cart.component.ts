import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input('cartList') cartList: string[];

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  removeFromCart(item) {
    this.shoppingCartService.removeFromCart(item);
  }

}
