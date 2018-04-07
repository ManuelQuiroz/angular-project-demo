import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { UiModule, UiLayoutComponent } from '@beeman/angular-ui';

const routes: Routes = [
  {
    path: '',
    component: UiLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', loadChildren: '@beeman/angular-about#AboutModule' },
      { path: 'home', loadChildren: '@beeman/angular-home#HomeModule' },
    ]
  }
]

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), RouterModule.forRoot(routes), UiModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
