import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemDetailMenu} from './item-detail-menu.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ShoppingCartService} from '../../services/shopping-cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input('itemList') itemList: Object;
  @Output() addedToCartEvent: EventEmitter<string> = new EventEmitter<string>();
  private itemDetailForm: FormGroup;
  private itemDetailMenu: ItemDetailMenu = new ItemDetailMenu();
  private searchString: string;
  private item: Object;
  private selectedItem: string;
  private userCart: string[];

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private http: HttpClient,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.userCart = this.shoppingCartService.getShoppingCart();
    this.route.params.subscribe(
      params => {
        this.searchString = params['item'];
      });

    this.http.get('/viewItem/?item=' + this.searchString).subscribe(data => {
      this.item = data;
    });

    this.itemDetailForm = this.formBuilder.group({
      'email': this.itemDetailMenu.email
    });

    this.itemDetailForm.controls['email'].valueChanges.subscribe(
      val => {
        this.itemDetailMenu.email = val;
      }
    );
  }

  sendToCart(item) {
    this.userCart = this.shoppingCartService.getShoppingCart();
    this.selectedItem = item;
    this.addedToCartEvent.emit(this.selectedItem);
    this.shoppingCartService.addToCart(item);
  }


}
