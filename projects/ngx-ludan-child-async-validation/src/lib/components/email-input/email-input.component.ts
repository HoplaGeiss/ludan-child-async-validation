import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ControlValueAccessor,
  FormControl,
  NG_ASYNC_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ValidateEmailNotTaken } from './async-email.validator';
import { EmailService } from './email.service';

@Component({
  selector: 'ngx-email-input',
  styleUrls: ['email-input.component.scss'],
  template: `
    <mat-card>
      <h2>Child Form</h2>
      <div class="form-field-wrapper">
        <mat-form-field appearance="standard">
          <mat-label>Email</mat-label>
          <input matInput [formControl]="emailCtrl" />
        </mat-form-field>
        <mat-spinner [diameter]="28" *ngIf="pending"></mat-spinner>
      </div>

      <div>Child validity: {{ emailCtrl.status }}</div>
    </mat-card>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailInputComponent,
      multi: true,
    },
  ],
})
export class EmailInputComponent
  implements OnInit, ControlValueAccessor, OnDestroy, AsyncValidator {
  emailCtrl: FormControl;
  teardown$ = new Subject();

  constructor(private emailService: EmailService) {}

  ngOnDestroy() {
    this.teardown$.next();
  }

  ngOnInit() {
    this.emailCtrl = new FormControl(
      '',
      Validators.required,
      ValidateEmailNotTaken.createValidator(this.emailService)
    );

    this.emailCtrl.valueChanges
      .pipe(takeUntil(this.teardown$))
      .subscribe(value => this.onChange(value));
  }

  writeValue(value: string): void {
    if (value !== null) {
      this.emailCtrl.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onChange = (value: any) => {};

  registerOnTouched() {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (this.emailCtrl.invalid) {
      return of(this.emailCtrl.errors);
    } else {
      return ValidateEmailNotTaken.createValidator(this.emailService)(control);
    }
  }

  get pending() {
    return this.emailCtrl.status === 'PENDING';
  }
}
