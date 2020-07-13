import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableCounterService {
  interval: any;
  counter = 0;
  observable: Observable<number>;
  // counterSubject = new Subject<number>();

  constructor() {}

  start() {
      this.observable = new Observable<number>(observer => {
        this.interval = setInterval(() => {
          this.counter ++;
          observer.next(this.counter);
          if (this.counter >= 10) {
            observer.complete();
          }
        }, 1000);
      });
  }

  stop() {
    clearInterval(this.interval);
  }
}
