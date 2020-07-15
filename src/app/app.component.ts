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

    this.userData = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      survey: this.form.value.survey
    };
    this.form.reset();
  }


}
