import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeSelfServicesComponent } from './employee-self-services/employee-self-services.component';
import { UiMobileRoutingModule } from './ui-mobile-routing.module';
import { LogInSignUpComponent } from './log-in-sign-up/log-in-sign-up.component';

@NgModule({
  declarations: [EmployeeSelfServicesComponent, LogInSignUpComponent],
  imports: [CommonModule, UiMobileRoutingModule],
})
export class UiMobileModule {}
