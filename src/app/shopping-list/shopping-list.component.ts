import {Component, OnInit} from '@angular/core';
import {IPurchase} from '../interfaces/purchase.interface';
import {ShoppingService} from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  purchases: IPurchase[] = [];

  constructor(
    private shoppingService: ShoppingService,
  ) {}

  ngOnInit(): void {
    this.purchases = this.shoppingService.listPurchases;
  }
}
