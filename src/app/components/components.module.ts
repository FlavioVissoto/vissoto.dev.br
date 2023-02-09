import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ExternalUrlDirective } from '../directives/external-url.directive';
import { SidebarServices } from '../services/sidebar.services';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, LogoComponent, ExternalUrlDirective],
  providers: [SidebarServices],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  exports: [HeaderComponent, SidebarComponent, FooterComponent, LogoComponent],
})
export class ComponentsModule {}
