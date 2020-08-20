import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq;
    if (this.authService.isAuth) {
      newReq = req.clone({
        setParams: {
          auth: this.authService.token
        }
      });
    }
    return next.handle(req)
      .pipe(
        tap(() => console.log('interceptor')),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.authService.logout();
            this.router.navigate(['/auth', 'login']);
          }
          return throwError(err);
        })
      );
  }
}
