export interface Sidebar {
  title: string;
  href?: string;
  items: SidebarItem[];
}

export interface SidebarItem {
  href: string;
  text: string;
  target: '_blank' | '_self' | '_parent' | '_top';
  selected: boolean;
}
