import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import { Sidebar } from '../../interfaces/sidebar';
import { SidebarServices } from '../../services/sidebar.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private sidebarServices: SidebarServices) {}

  @Input() byToggleMenu: EventEmitter<boolean>;
  showMenu = false;

  sidebar: Sidebar[] = [];

  ngOnInit(): void {
    this.getSidebar();
    this.listenerToggleMenu();
  }

  getSidebar(): void {
    this.sidebarServices.getSidebar().subscribe({
      next: (x: Sidebar[]) => {
        this.sidebar = x;
      },
    });
  }

  listenerToggleMenu(): void {
    if (this.byToggleMenu) {
      this.byToggleMenu.subscribe({
        next: (x: boolean) => {
          this.showMenu = x;
        },
      });
    }
  }
}
