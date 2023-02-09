import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BindCssDirective } from '../../directives/bind-css.directive';
import { ColorsRoutingModule } from './colors-routing.module';
import { ColorsComponent } from './colors.component';

@NgModule({
  declarations: [ColorsComponent, BindCssDirective],
  imports: [CommonModule, ColorsRoutingModule],
  providers: [],
  exports: [ColorsComponent],
})
export class ColorsModule {}
