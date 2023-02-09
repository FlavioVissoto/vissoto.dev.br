import { InjectionToken, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'colors',
    loadChildren: () => {
      return import('./modules/colors/colors.module').then((m) => m.ColorsModule);
    },
  },
  {
    path: 'uimobiles',
    loadChildren: () => {
      return import('./modules/ui-mobile/ui-mobile.module').then((m) => m.UiMobileModule);
    },
  },
  {
    path: '',
    loadChildren: () => {
      return import('./modules/home/home.module').then((m) => m.HomeModule);
    },
  },
  {
    path: 'externalRedirect',
    canActivate: [externalUrlProvider],
    // We need a component here because we cannot define the route otherwise
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
