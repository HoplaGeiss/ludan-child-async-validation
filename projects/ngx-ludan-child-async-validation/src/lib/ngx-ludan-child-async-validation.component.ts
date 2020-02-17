import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-ludan-child-async-validation',
  styleUrls: ['ngx-ludan-child-async-validation.component.scss'],
  template: `
    <mat-card>
      <h2>Main Form</h2>
      <form [formGroup]="form">
        <mat-form-field appearance="standard">
          <mat-label>Country</mat-label>
          <input matInput formControlName="country" />
        </mat-form-field>
        <ngx-email-input formControlName="email"></ngx-email-input>
      </form>
    </mat-card>
    <div class="infos">
      <div>Form validity: {{ form.status }}</div>
      <div>form value: {{ form.value | json }}</div>
    </div>
  `,
  styles: [],
})
export class NgxLudanChildAsyncValidationComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      country: ['Alsace'],
      email: ['john@smith.co.uk'],
    });
  }
}
