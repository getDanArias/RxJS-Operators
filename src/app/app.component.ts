import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>{{title}}</h1>
    <app-operators></app-operators>
  `
})
export class AppComponent {
  title = 'RxJS Operators';
}
