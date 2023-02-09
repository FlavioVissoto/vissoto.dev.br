import { Directive, ElementRef, HostListener } from '@angular/core';

import { Router } from '@angular/router';

@Directive({
  selector: 'a[appExternalUrl]',
})
export class ExternalUrlDirective {
  constructor(private el: ElementRef, private router: Router) {}

  @HostListener('click', ['$event'])
  clicked(event: Event) {
    const url: string = this.el.nativeElement.href;
    if (!url) {
      return;
    }

    if (url.substring(0, location.origin.length).toLowerCase() != location.origin) {
      window.open(url, '_blank');
    } else {
      this.router.navigate([this.el.nativeElement.pathname], {
        skipLocationChange: true,
      });
    }

    event.preventDefault();
  }
}
