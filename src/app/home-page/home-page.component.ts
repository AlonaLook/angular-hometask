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
  isUser = false;

  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, velit!';
  isVisibleText = false;
  counter = 0;
  numbers: number[] = [this.counter];

  getUserName(event) {
    const userName = event.target.value;

    if (userName.trim()) {
      this.isUser = true;
    }
  }

  onReset() {
    this.userName = '';
    this.isUser = false;
  }

  toggleVisibility() {
    this.isVisibleText = !this.isVisibleText;
    this.counter++;
    this.numbers = [...this.numbers, this.counter];
  }

}
