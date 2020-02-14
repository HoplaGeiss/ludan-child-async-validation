import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  checkEmailNotTaken(value: string): Observable<boolean> {
    return of(true).pipe(delay(500));
  }
}
