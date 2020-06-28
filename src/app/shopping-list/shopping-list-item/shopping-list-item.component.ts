import {Component, Input} from '@angular/core';
import {IPurchase} from '../../interfaces/purchase.interface';
import {ShoppingService} from '../../services/shopping.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent {
  @Input() purchase: IPurchase;

  constructor(private shoppingService: ShoppingService ) {}

  editItem() {
    this.shoppingService.editItem(this.purchase.id);
  }

  saveChanges() {
    this.shoppingService.saveChanges(this.purchase.id);
  }

  cloneItem() {
    this.shoppingService.cloneItem(this.purchase.id);
  }

  removeItem() {
    this.shoppingService.removeItem(this.purchase.id);
  }
}
