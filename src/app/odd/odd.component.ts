import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {ObservableCounterService} from '../services/observable-counter.service';
import {ObservableTextService} from '../services/observable-text.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit, OnDestroy {
  subscription: Subscription;
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

    this.subscription = this.observableCounterService.observable.subscribe(
      (val) => {
        if ( val % 2 === 1) {
          this.oddNumbers = [...this.oddNumbers, val];
        }
      },
      (e) => console.log(e.message),
      () => console.log('Completed!')
    );
  }

  ngOnDestroy(): void {
    this.subscriptionText.unsubscribe();
    this.subscription.unsubscribe();
  }

  showEven() {
    this.observableTextService.showEven();
  }
}
