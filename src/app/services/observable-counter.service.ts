import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableCounterService {
  interval: any;
  counter = 0;
  observable: Observable<number>;
  subject: Subject<boolean> = new BehaviorSubject(false);

  constructor() {}

  start() {
    this.subject.next(true);

    this.observable = new Observable(observer => {
      observer.next(this.counter);

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
    this.subject.next(false);
  }
}
