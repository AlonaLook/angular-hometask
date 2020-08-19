import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(text: string, title: string) {
    alert(`${ text } - ${ title }`);
  }
}
