export interface Sidebar {
  title: string;
  items: SidebarItem[];
  textAuxiliary?: string;
  textAuxiliaryCollor?: string;
}

export interface SidebarItem {
  href?: string;
  iconCss?: string;
  text: string;
  textAuxiliary?: string;
  textAuxiliaryCollor?: string;
  target: '_blank' | '_self' | '_parent' | '_top';
  selected: boolean;
}
