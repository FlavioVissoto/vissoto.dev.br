import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Sidebar } from '../../interfaces/sidebar';
import { SidebarServices } from '../../services/sidebar.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private sidebarServices: SidebarServices) {}

  @Output() byToggleMenu = new EventEmitter<boolean>();

  sidebar: Sidebar[] = [];

  ngOnInit(): void {
    this.getSidebar();
  }

  getSidebar(): void {
    this.sidebarServices.getSidebar().subscribe({
      next: (x: Sidebar[]) => {
        this.sidebar = x;
      },
    });
  }

  toggleMenu(): void {
    this.byToggleMenu.emit(false);
  }
}
