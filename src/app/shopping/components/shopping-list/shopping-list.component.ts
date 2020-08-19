import {Component} from '@angular/core';
import {ShoppingService} from '../../../shared/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  constructor(
    public shoppingService: ShoppingService
  ) {}
}
