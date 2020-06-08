import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  footerText = 'Copyright 2020';

  title = 'Two ways of data binding ';
  userName: string;

  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, velit!';
  isVisibleText = false;
  counter = 0;
  numbers: number[] = [this.counter];


  onReset() {
    this.userName = '';
  }

  toggleVisibility() {
    this.isVisibleText = !this.isVisibleText;
    this.counter++;
    this.numbers = [...this.numbers, this.counter];
  }

}
