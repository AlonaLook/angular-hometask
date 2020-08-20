import { Injectable } from '@angular/core';
import {IPurchase} from '../interfaces/purchase.interface';
import {LoggingService} from './logging.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
const DbUrl = `${environment.fbDbUrl}/purchases.json`;
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

  constructor(private loggingService: LoggingService, private http: HttpClient) {}

  createPurchase(purchase: IPurchase): Observable<IPurchase> {
    return this.http.post<IPurchase>(DbUrl, purchase)
      .pipe(
        tap(res => {
          return {
            ...purchase,
            id: res.name
          };
        })
      );
  }

  getPurchases(): Observable<IPurchase[]> {
    return this.http.get<IPurchase[]>(DbUrl)
      .pipe(
        map(response => {
          const array = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              array.push({...response[key], id: key});
            }
          }
          return array;
        }),
        catchError(err => {
          return throwError(err);
        })
      );
  }

  searchItem(id: string) {
    return this.listPurchases.find(purchase => purchase.id === id);
  }

  getIndexById(id: string) {
    return this.listPurchases.reduce((acc, curValue, index) => {
      return curValue.id === id ? (acc + index) : acc;
    }, 0);
  }

  updateItem(id: string, title: string, count: number) {
    this.listPurchases = this.listPurchases.reduce( (acc, curVal) => {
      const item = curVal.id === id
        ?  { ...curVal, title, count }
        : curVal;
      return [...acc, item];
    }, []);
  }
}
