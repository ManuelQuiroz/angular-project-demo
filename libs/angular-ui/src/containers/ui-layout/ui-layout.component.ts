import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-layout',
  template: `
    <ui-header></ui-header>
    <div class="container my-5">
      <router-outlet></router-outlet>
    </div>
    <ui-footer></ui-footer>
  `,
  styles: []
})
export class UiLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
