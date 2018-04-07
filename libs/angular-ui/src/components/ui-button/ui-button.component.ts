import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button [class]="classes">
      {{label}}
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class UiButtonComponent {
  @Input() public label: string;
  @Input() public type = 'primary';
  @Input() public outline = true;

  public get classes() {
    return [
      'btn',
      `btn-${this.outline ? 'outline-' : '' }${this.type}`,
    ].join(' ');
  }
}
