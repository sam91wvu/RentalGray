import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemDetailMenu} from './item-detail-menu.model';
import {FormBuilder, FormGroup} from '@angular/forms';

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
  private selectedItem: string;

  constructor(private formBuilder: FormBuilder) {
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

  sendToCart(item) {
    this.selectedItem = item;
    this.addedToCartEvent.emit(this.selectedItem);
  }


}
