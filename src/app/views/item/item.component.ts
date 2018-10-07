import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ItemDetailMenu} from '../item-detail/item-detail-menu.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('itemList') itemList: Object;
  @Output() addedToCartEvent: EventEmitter<string> = new EventEmitter<string>();
  private selectedItem: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {}

  sendToCart(item) {
    this.selectedItem = item;
    this.addedToCartEvent.emit(this.selectedItem);
  }


}
