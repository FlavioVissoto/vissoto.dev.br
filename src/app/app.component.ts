import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vissoto.dev.br';

  byToggleMenu = new EventEmitter<boolean>();
  showMenu = false;
  toggleMenu(showMenu: boolean): void {
    this.showMenu = showMenu;
    this.byToggleMenu.emit(this.showMenu);
  }
}
