import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-alert',
  template: `
    <div class="alert alert-{{type}}">
      {{text}}
      <ng-content></ng-content>
    </div>
  `,
})
export class UiAlertComponent {
  @Input() public type = 'dark'
  @Input() public text
}
