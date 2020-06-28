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
    {id: 3, title: 'Fish', count: 11, isEdited: false}
  ];

  constructor(private loggingService: LoggingService) {}


  addPurchase(title: string, count: number) {
    if (title.trim() && count) {
      this.loggingService.log('You add', title);
      this.listPurchases = [{title, count, id: Date.now(), isEdited: false}, ...this.listPurchases];
    }
  }

  editingHandler(id: number, editValue: boolean) {
    this.listPurchases = this.listPurchases.reduce((acc, purchase) => {
      const item = purchase.id === id
        ?  { ...purchase, isEdited: editValue }
        : purchase;
      return [...acc, item];
    }, []);
  }

  editItem(id: number) {
    this.editingHandler(id, true);
  }

  saveChanges(id: number) {
   this.editingHandler(id, false);
  }


  cloneItem(id: number) {
      const searchPurchase = this.listPurchases.find(purchase => purchase.id === id);
      const newPurchase = {...searchPurchase};
      newPurchase.id = Date.now();

      this.listPurchases = [...this.listPurchases, newPurchase];
  }

  removeItem(id: number) {
    const searchPurchase = this.listPurchases.find(purchase => purchase.id === id);
    this.loggingService.log('You remove', searchPurchase.title);
    this.listPurchases = this.listPurchases.filter(purchase => purchase.id !== id);
  }
}
