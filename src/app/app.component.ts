import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping list';
  isAuth: boolean;

  constructor(
    private authService: AuthService
  ) {}

  login() {
    this.authService.login();
    this.isAuth = true;
  }

  logout() {
    this.authService.logout();
    this.isAuth = false;
  }
}
