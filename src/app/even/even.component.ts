import {Component, OnInit, OnDestroy} from '@angular/core';
import {ObservableCounterService} from '../services/observable-counter.service';
import { Subscription } from 'rxjs';
import {ObservableTextService} from '../services/observable-text.service';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionObservable: Subscription;
  subscriptionText: Subscription;

  evenNumbers: number[] = [];
  allowTextShow: boolean;

  constructor(
    private observableCounterService: ObservableCounterService,
    private observableTextService: ObservableTextService
  ) {}

  ngOnInit(): void {
    this.subscriptionText = this.observableTextService.subject.subscribe(value => {
      this.allowTextShow = value;
    });

    this.subscription = this.observableCounterService.subject.subscribe(
      val => {
        console.log('subject value', val);
        if (val) {
          this.subscriptionObservable = this.observableCounterService.observable.subscribe(
            num => {
              console.log('num', num);
              this.evenNumbers = num % 2 === 0 ? [...this.evenNumbers, num] : this.evenNumbers;
            },
            (e) => console.log(e.message),
               () => console.log('Completed!')
          );
        } else {
          this.handleUnsubscription();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptionText.unsubscribe();
    this.subscription.unsubscribe();
  }

  showOdd() {
    this.observableTextService.showOdd();
  }

  handleUnsubscription() {
    if (this.subscriptionObservable) {
      this.subscriptionObservable.unsubscribe();
    }
  }
}
