import { Component } from '@angular/core';

@Component({
  selector: 'app-about-index',
  template: `
    <ui-alert>I am About!</ui-alert>
    <ui-button routerLink="/home" [outline]="false">Go to Home</ui-button>
  `,
})
export class AboutIndexComponent {

}
