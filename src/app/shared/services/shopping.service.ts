import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPurchase} from '../interfaces/purchase.interface';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

// Services
import {LoggingService} from './logging.service';

// Environment
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private loggingService: LoggingService, private http: HttpClient) {}

  createPurchase(purchase: IPurchase): Observable<IPurchase> {
    return this.http.post<IPurchase>(`${environment.fbDbUrl}/purchases.json`, purchase)
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
    return this.http.get<IPurchase[]>(`${environment.fbDbUrl}/purchases.json`)
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

  removeItemById(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/purchases/${id}.json`);
  }

  getItemById(id: string): Observable<IPurchase> {
    return this.http.get<IPurchase>(`${environment.fbDbUrl}/purchases/${id}.json`);
  }

  update(purchase: IPurchase): Observable<IPurchase> {
    return this.http.patch<IPurchase>(`${environment.fbDbUrl}/purchases/${purchase.id}.json`, purchase);
  }
}
