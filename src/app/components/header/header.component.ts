import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() byToggleMenu = new EventEmitter<boolean | undefined>();

  toggleMenu(value: boolean | undefined): void {
    this.byToggleMenu.emit(value);
  }
}
