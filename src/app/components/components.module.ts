import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarServices } from '../services/sidebar.services';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, LogoComponent],
  providers: [SidebarServices],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  exports: [HeaderComponent, SidebarComponent, FooterComponent, LogoComponent],
})
export class ComponentsModule {}
