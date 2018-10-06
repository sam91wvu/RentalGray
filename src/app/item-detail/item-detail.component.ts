import {Component, Input, OnInit} from '@angular/core';
import {ItemDetailMenu} from './item-detail-menu.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input('itemList') itemList: Object;
  private itemDetailForm: FormGroup;
  private itemDetailMenu: ItemDetailMenu = new ItemDetailMenu();
  private cart = [];

  constructor(private formBuilder: FormBuilder,
              private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.itemDetailForm = this.formBuilder.group({
      'email': this.itemDetailMenu.email
    });

    this.itemDetailForm.controls['email'].valueChanges.subscribe(
      val => {
        this.itemDetailMenu.email = val;
      }
    );
  }

  addToCart(item) {
    this.cart.push(item);
  }



}
