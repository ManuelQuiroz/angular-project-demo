import { Component } from '@angular/core';

@Component({
  selector: 'ui-footer',
  template: `
    <footer class="footer">
      <nav class="navbar fixed-bottom navbar-expand navbar-dark bg-dark py-5">
        <div class="container">
          <span class="text-muted m-auto">
            <a class="text-default" href="https://github.com/beeman">beeman</a>
            <i class="fa fa-copyright"></i> 2018
          </span>
        </div>
      </nav>
    </footer>
  `,
})
export class UiFooterComponent {

}
