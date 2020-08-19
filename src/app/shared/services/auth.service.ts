import { Injectable } from '@angular/core';
import {IUser} from '../interfaces/user.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {IFBAuthentication} from '../../auth/auth.interface';

const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;

  constructor(private http: HttpClient) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('tokenExpDate'));
    const today = new Date();

    if (today > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('tokenID');
  }

  login(user: IUser): Observable<any> {
    user.returnSecureToken = true;
    return this.http
      .post<IUser>(authUrl, user)
      .pipe(
        tap(response => {
          this.isAuth = response.registered;
          this.setToken(response);
        })
      );
  }

  logout() {
    this.isAuth = false;
    this.setToken(null);
  }

  private setToken(response: IFBAuthentication | null) {
    if (response) {
      const expDate = new Date(Date.now() + Number(response.expiresIn) * 1000);
      localStorage.setItem('tokenID', response.idToken);
      localStorage.setItem('tokenExpDate', JSON.stringify(expDate));
    } else {
      localStorage.clear();
    }

  }
}
