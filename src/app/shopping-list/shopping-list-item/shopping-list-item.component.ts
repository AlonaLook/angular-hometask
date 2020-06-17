import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPurchase} from '../../interfaces/purchase.interface';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent {
  @Input() purchase: IPurchase;
  @Output()onClonePurchase: EventEmitter<number> = new EventEmitter<number>();
  @Output()onRemovePurchase: EventEmitter<number> = new EventEmitter<number>();

  cloneItem() {
    this.onClonePurchase.emit(this.purchase.id);
  }

  removeItem() {
    this.onRemovePurchase.emit(this.purchase.id);
  }
}
