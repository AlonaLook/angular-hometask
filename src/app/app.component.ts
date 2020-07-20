import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../validators/custom.validator';

export interface IUserData {
  name: string;
  email: string;
  password: string;
  survey: string;
  skills: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  defaultTitle = 'middle';
  isSubmitted = false;
  userData: IUserData;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        CustomValidator.prohibitedValue.bind(this)
      ],
        CustomValidator.anotherProhibitedValue.bind(this)
      ),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      survey: new FormControl(this.defaultTitle, Validators.required),
      skills: new FormArray([])
    });
  }

  get controls() {
    return (this.form.get('skills') as FormArray).controls;
  }

  get name() {
    return this.form.get('name');
  }

  get isEmptyName() {
    return this.name.errors && this.name.errors.required && this.name.touched;
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get isPasswordShort() {
    return this.password.errors.minlength && this.password.errors.minlength.actualLength < this.password.errors.minlength.requiredLength;
  }
  get survey() {
    return this.form.get('survey');
  }

  onSubmit() {
    this.isSubmitted = true;
    this.userData = {...this.form.value};
    console.log('data', this.userData);
    this.form.reset();
  }


  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
}
