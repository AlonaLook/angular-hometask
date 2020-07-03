import { Injectable } from '@angular/core';
import {IPurchase} from '../interfaces/purchase.interface';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  listPurchases: IPurchase[] = [
    {id: 1, title: 'Milk', count: 1, isEdited: false},
    {id: 2, title: 'Bread', count: 2, isEdited: false},
    {id: 3, title: 'Orange', count: 5, isEdited: false},
    {id: 4, title: 'Tomato', count: 3, isEdited: false},
    {id: 5, title: 'Pasta', count: 15, isEdited: false},
  ];

  constructor(private loggingService: LoggingService) {}

  addPurchase(title: string, count: number) {
    if (title.trim() && count) {
      this.loggingService.log('You add', title);

      this.listPurchases = [
        {title, count, id: Date.now(), isEdited: false},
        ...this.listPurchases
      ];
    }
  }

  searchItem(id: number) {
    return this.listPurchases.find(purchase => purchase.id === id);
  }

  getIndexById(id: number) {
    return this.listPurchases.reduce((acc, curValue, index) => {
      return curValue.id === id ? (acc + index) : acc;
    }, 0);
  }
}
