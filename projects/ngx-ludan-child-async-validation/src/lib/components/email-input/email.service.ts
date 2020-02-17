import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  checkEmailNotTaken(value: string): Observable<boolean> {
    if (value === 'a') {
      return of(false).pipe(delay(500));
    } else {
      return of(true).pipe(delay(500));
    }
  }
}
