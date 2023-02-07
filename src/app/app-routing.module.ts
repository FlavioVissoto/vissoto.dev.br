import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

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
    path: '',
    loadChildren: () => {
      return import('./modules/home/home.module').then((m) => m.HomeModule);
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
