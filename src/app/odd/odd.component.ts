import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {ObservableCounterService} from '../services/observable-counter.service';
import {ObservableTextService} from '../services/observable-text.service';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionObservable: Subscription;
  subscriptionText: Subscription;

  oddNumbers: number[] = [];
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
        if (val) {
          this.subscriptionObservable = this.observableCounterService.observable.subscribe(
            num => {
              this.oddNumbers = num % 2 === 1 ? [...this.oddNumbers, num] : this.oddNumbers;
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

  showEven() {
    this.observableTextService.showEven();
  }

  handleUnsubscription() {
    if (this.subscriptionObservable) {
      this.subscriptionObservable.unsubscribe();
    }
  }
}
