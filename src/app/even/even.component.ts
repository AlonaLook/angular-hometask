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

    this.subscription = this.observableCounterService.counterSubjectEven.subscribe(
      (val) => {
        this.evenNumbers = [...this.evenNumbers, val];
    },
      (e) => console.log(e.message),
      () => console.log('Completed!')
    );
  }

  ngOnDestroy(): void {
    this.subscriptionText.unsubscribe();
    this.subscription.unsubscribe();
  }

  showOdd() {
    this.observableTextService.showOdd();
  }
}
