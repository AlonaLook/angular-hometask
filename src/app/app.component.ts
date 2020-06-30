import { Component } from '@angular/core';
import {ShoppingService} from './services/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping list';
  constructor(public shoppingService: ShoppingService) {}
}
