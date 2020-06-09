import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: number[] = [];

  onAddNumber(num: number) {
    this.numbers = [...this.numbers, num];
    console.log('numbers', this.numbers);
  }
}
