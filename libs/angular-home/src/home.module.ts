import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './containers/home-index/home-index.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@beeman/angular-ui';

const routes: Routes = [
  { path: '', component: HomeIndexComponent, children: [] },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
  declarations: [HomeIndexComponent]
})
export class HomeModule {}
