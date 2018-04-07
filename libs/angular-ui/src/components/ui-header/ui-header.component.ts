import { Component } from '@angular/core';

@Component({
  selector: 'ui-header',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark mb-5">
      <a class="navbar-brand" routerLinkActive="active" routerLink="/">angular-demo</a>
      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class UiHeaderComponent {

}
