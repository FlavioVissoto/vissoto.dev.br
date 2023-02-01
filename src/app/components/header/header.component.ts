import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private showMenu = false;

  @Output() byToggleMenu = new EventEmitter<boolean>();

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    this.byToggleMenu.emit(this.showMenu);
  }
}
