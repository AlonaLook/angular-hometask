import { Component } from '@angular/core';
import {IPurchase} from './interfaces/purchase.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping list';
  listPurchases: IPurchase[] = [
    {id: 1, title: 'Milk', count: 1},
    {id: 2, title: 'Bread', count: 2},
    {id: 3, title: 'Fish', count: 11}
  ];

  cloneItem(id: number) {
    const searchPurchase = this.listPurchases.find(purchase => purchase.id === id);
    const newPurchase = {...searchPurchase};
    newPurchase.id = Date.now();

    this.listPurchases = [...this.listPurchases, newPurchase];
  }

  removeItem(id: number) {
    this.listPurchases = this.listPurchases.filter(purchase => purchase.id !== id);
  }

  addItem(purchase: IPurchase) {
    this.listPurchases = [purchase, ...this.listPurchases];
  }
}
