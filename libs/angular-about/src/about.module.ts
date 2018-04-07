import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutIndexComponent } from './containers/about-index/about-index.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@beeman/angular-ui';

const routes: Routes = [
  { path: '', component: AboutIndexComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
  declarations: [AboutIndexComponent]
})
export class AboutModule {
}
