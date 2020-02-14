import { NgxLudanChildAsyncValidationModule } from './../../projects/ngx-ludan-child-async-validation/src/lib/ngx-ludan-child-async-validation.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    NgxLudanChildAsyncValidationModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
