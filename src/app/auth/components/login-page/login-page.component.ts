import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

// Interfaces
import {IUser} from '../../../shared/interfaces/user.interface';

// Services
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
  isLogin = false;
  isLoading = false;

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
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    this.formIsSubmitted = true;

    const newUser: IUser = {
      email: this.email.value,
      password: this.password.value
    };
    if (this.isLogin) {
      this.authService
        .login(newUser)
        .subscribe(() => {
            this.formIsSubmitted = false;
            this.isLoading = false;
            this.router.navigate(['/shopping']);
          },
          (err) => {
            this.errorMessage = err.error.error.message;
          });
    }

    this.authService.signUp(newUser).subscribe(() => {
      this.formIsSubmitted = false;
      this.isLoading = false;
      this.router.navigate(['/']);
    });
    this.form.reset();
  }
}
