import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { EmailService } from './email.service';

export class ValidateEmailNotTaken {
  static createValidator(emailService: EmailService) {
    return (control: AbstractControl) => {
      return emailService.checkEmailNotTaken(control.value).pipe(
        map(res => {
          return res ? null : { emailTaken: true };
        })
      );
    };
  }
}
