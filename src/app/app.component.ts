import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

export interface IUserData {
  name: string;
  email: string;
  password: string;
  survey: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

  defaultTitle = 'student';
  isSubmitted = false;
  userData: IUserData;

  onSubmit() {
    this.isSubmitted = true;
    const {name, email, password, survey } = {...this.form.value};

    this.userData = {
      name,
      email,
      password,
      survey
    };
    this.form.reset();
  }


}
