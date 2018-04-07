import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiAlertComponent } from './components/ui-alert/ui-alert.component';
import { UiLayoutComponent } from './containers/ui-layout/ui-layout.component';
import { UiHeaderComponent } from './components/ui-header/ui-header.component';
import { UiFooterComponent } from './components/ui-footer/ui-footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UiButtonComponent, UiAlertComponent, UiLayoutComponent, UiHeaderComponent, UiFooterComponent],
  exports: [UiButtonComponent, UiAlertComponent, UiLayoutComponent]
})
export class UiModule {
}
