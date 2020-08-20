import {Component, OnInit} from '@angular/core';
import {ShoppingService} from '../../../shared/services/shopping.service';
import {IPurchase} from '../../../shared/interfaces/purchase.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  purchases: IPurchase[];

  constructor(
    private shoppingService: ShoppingService
  ) {}

  ngOnInit(): void {
    this.shoppingService.getPurchases().subscribe((purchases) => {
     this.purchases = purchases;
    });
  }
}
