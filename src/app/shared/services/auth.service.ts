import { Injectable } from '@angular/core';
import {IUser} from '../interfaces/user.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {AuthResponse} from '../../auth/auth.interface';

const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;
const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;

  constructor(private http: HttpClient) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('tokenExpDate'));
    const today = new Date();

    if (!expDate || today > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('tokenID');
  }

  login(user: IUser): Observable<any> {
    return this.http
      .post<IUser>(loginUrl, {
        ...user,
        returnSecureToken: true
      })
      .pipe(
        tap(response => {
          this.isAuth = response.registered;
          this.setToken(response);
        })
      );
  }

  signUp(user: IUser): Observable<any> {
    return this.http
      .post<IUser>(signUpUrl, {
        ...user,
        returnSecureToken: true
      })
      .pipe(
        tap(response => {
          this.setToken(response);
        })
      );
  }

  logout() {
    this.isAuth = false;
    this.setToken(null);
  }

  private setToken(response: AuthResponse | null) {
    if (response) {
      const expDate = new Date(Date.now() + Number(response.expiresIn) * 1000);
      localStorage.setItem('tokenID', response.idToken);
      localStorage.setItem('tokenExpDate', JSON.stringify(expDate));
    } else {
      localStorage.clear();
    }
  }
}
