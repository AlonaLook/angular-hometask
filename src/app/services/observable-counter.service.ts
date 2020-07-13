import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableCounterService {
  interval: any;
  counter = 1;
  observable: Observable<number>;
  subject: Subject<boolean> = new BehaviorSubject(false);

  constructor() {}

  start() {
    this.observable = new Observable(observer => {
      this.interval = setInterval(() => {
        observer.next(this.counter);
        this.counter++;

        if (this.counter >= 10) {
          observer.complete();
        }

        }, 1000);
      });

    this.subject.next(true);
  }

  stop() {
    clearInterval(this.interval);
    this.subject.next(false);
  }
}
