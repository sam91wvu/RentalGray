import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('itemList') itemList: Object;
  @Input('pageSize') pageSize: number;
  @Output() addedToCartEvent: EventEmitter<string> = new EventEmitter<string>();
  private selectedItem: string;

  constructor() {
  }

  ngOnInit() {
   console.log(this.pageSize)
  }

  sendToCart(item) {
    this.selectedItem = item;
    this.addedToCartEvent.emit(this.selectedItem);
  }


}
