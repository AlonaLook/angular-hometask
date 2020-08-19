import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IUser} from '../../../shared/interfaces/user.interface';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  formIsSubmitted = false;
  errorMessage: any;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null,
        [
          Validators.required,
          Validators.email
        ]),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(6)
        ])
    });
  }

  get email() {
    return this.form.get('email');
  }
   get emailInvalidAndTouched() {
    return this.email.invalid && this.email.touched;
   }
  get password() {
    return this.form.get('password');
  }
  get passwordInvalidAndTouched() {
    return this.password.invalid && this.password.touched;
  }

  submit() {
    this.formIsSubmitted = true;
    const newUser: IUser = {
      email: this.email.value,
      password: this.password.value
    };

    this.authService
      .login(newUser)
      .subscribe(() => {
        this.formIsSubmitted = false;
        this.form.reset();
        this.router.navigate(['/']);
      },
        (err) => {
          this.errorMessage = err.error.error.message;
        });
  }

}
