import { FormControl } from '@angular/forms';
import {Observable, of} from 'rxjs';
import { delay, map } from 'rxjs/operators';

const prohibitedNames = ['John', 'Ted', 'Kate', 'Daria', 'Hanna'];
const wrongValue = 'Ivan';

export interface IProhibitedValue {
  [key: string]: boolean;
}

export class CustomValidator {

  static prohibitedValue(control: FormControl): IProhibitedValue {

    if (prohibitedNames.indexOf(control.value) !== -1) {
      return { prohibitedValue: true};
    }
    return null;
  }

  static anotherProhibitedValue(control: FormControl): Promise<IProhibitedValue | boolean> | Observable<IProhibitedValue | boolean> {

    return of(control.value).pipe(
      delay(1000),
      map(value => {
        return wrongValue.toLowerCase() === value.toLowerCase() ? { forbidden: true } : null;
      })
    );
  }
}
