import {Component, Input} from '@angular/core';
import {IPurchase} from '../interfaces/purchase.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  @Input() purchases: IPurchase;
}
