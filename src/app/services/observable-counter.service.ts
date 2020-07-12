import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableCounterService {
  interval: any;
  counter = 0;
  counterSubject = new Subject<number>();
  counterSubjectOdd: Observable<number>;
  counterSubjectEven: Observable<number>;

  constructor() {
    this.counterSubjectOdd = this.counterSubject.pipe(
      filter(val => val % 2 === 1)
    );
    this.counterSubjectEven = this.counterSubject.pipe(
      filter(val =>  val % 2 === 0)
    );
  }

  start() {
    this.interval = setInterval(() => {
      this.counter ++;
      this.counterSubject.next(this.counter);

      if (this.counter >= 10) {
        this.counterSubject.complete();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
