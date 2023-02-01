import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarServices } from '../services/sidebar.services';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  providers: [SidebarServices],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class ComponentsModule {}
