import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableTextService {
   subject = new BehaviorSubject<boolean>(false);

   showOdd() {
     this.subject.next(false);
   }

   showEven() {
     this.subject.next(true);
   }
}
