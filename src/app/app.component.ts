import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <main>
      <ngx-ludan-child-async-validation></ngx-ludan-child-async-validation>
    </main>
  `,
})
export class AppComponent {}
