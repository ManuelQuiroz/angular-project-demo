import { Component } from '@angular/core';

@Component({
  selector: 'app-home-index',
  template: `
    <ui-alert type="success">I am Home!</ui-alert>
    <ui-button routerLink="/about">Go to About</ui-button>
  `,
  styles: []
})
export class HomeIndexComponent {
}
