import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, OnDestroy {
  @Output('onIncrement')increment = new EventEmitter<number>();
  counter = 1;
  interval: any;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.onStopEmit();
  }

  onIncrement() {
    this.onStopEmit();
    this.interval = setInterval(() => {
      this.increment.emit(this.counter);
      this.counter++;
    }, 2000);
  }

  onStopEmit() {
    clearInterval(this.interval);
  }

}
