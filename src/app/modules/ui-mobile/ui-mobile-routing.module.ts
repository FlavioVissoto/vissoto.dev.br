import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { EmployeeSelfServicesComponent } from './employee-self-services/employee-self-services.component';

const routes: Routes = [
  {
    path: 'EmployeeSelfServices',
    component: EmployeeSelfServicesComponent,
  },
  {
    path: 'LogInSignUp',
    loadChildren: () => {
      return import('./log-in-sign-up/log-in-sign-up.module').then((m) => m.LogInSignUpModule);
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiMobileRoutingModule {}
