import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { EmailInputModule } from './components/email-input/email-input.module';
import { NgxLudanChildAsyncValidationComponent } from './ngx-ludan-child-async-validation.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    EmailInputModule,
  ],
  declarations: [NgxLudanChildAsyncValidationComponent],
  exports: [NgxLudanChildAsyncValidationComponent],
})
export class NgxLudanChildAsyncValidationModule {}
