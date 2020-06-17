import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IPurchase} from '../interfaces/purchase.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  @Input() purchases: IPurchase;
  @Output() onClonePurchase: EventEmitter<number> = new EventEmitter<number>();
  @Output() onRemovePurchase: EventEmitter<number> = new EventEmitter<number>();

  cloneItem(id: number) {
    this.onClonePurchase.emit(id);
  }

  removeItem(id: number) {
    this.onRemovePurchase.emit(id);
  }
}
