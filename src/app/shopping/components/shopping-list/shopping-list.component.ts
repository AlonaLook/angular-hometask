import {Component, OnInit} from '@angular/core';

// Services
import {ShoppingService} from '../../../shared/services/shopping.service';

// Interfaces
import {IPurchase} from '../../../shared/interfaces/purchase.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  purchases: IPurchase[] = [];

  constructor(
    private shoppingService: ShoppingService
  ) {}

  ngOnInit(): void {
    this.shoppingService.getPurchases().subscribe((purchases) => {
     this.purchases = purchases;
    });
  }

  remove(id: string) {
    this.shoppingService.removeItemById(id).subscribe(() => {
      this.purchases = this.purchases.filter(purchase => purchase.id !== id);
    });
  }
}
