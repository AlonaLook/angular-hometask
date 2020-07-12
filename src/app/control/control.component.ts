import {Component, OnDestroy} from '@angular/core';
import {ObservableCounterService} from '../services/observable-counter.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnDestroy {

  constructor( private observableCounterService: ObservableCounterService) {}

  ngOnDestroy(): void {
    this.onStopEmit();
  }

  increment() {
   this.observableCounterService.start();
  }

  onStopEmit() {
    this.observableCounterService.stop();
  }

}
