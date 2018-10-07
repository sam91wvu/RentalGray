import {Component, EventEmitter, Input, Output} from '@angular/core';

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
  }

  sendToCart(item) {
    this.selectedItem = item;
    this.addedToCartEvent.emit(this.selectedItem);
  }


}
