import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {IPost} from '../../interfases/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<IPost[]> {
    const headers =  new HttpHeaders({
      Hello: 'header',
      Awesome: 'header plus'
    });
    let params = new HttpParams().set('count', '4');
    params = params.append('timeouts', '3s');

    return this.http.get<IPost[]>('https://posts-5c806.firebaseio.com/posts.json', {
      headers,
      params
    })
      .pipe(
        map(post => {
          const array = [];

          for (const key in post) {
            if (post.hasOwnProperty(key)) {
              array.push({...post[key], id: key});
            }
          }
          return array;
        }),
        catchError(err => {
          return throwError(err);
        })
      );
  }

  postData(post: IPost): Observable<IPost> {
    return this.http.post<IPost>('https://posts-5c806.firebaseio.com/posts.json', post)
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }

  deleteAllData(): Observable<void> {
    return this.http.delete<void>('https://posts-5c806.firebaseio.com/posts.json')
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }
}
