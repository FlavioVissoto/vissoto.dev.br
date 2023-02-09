import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[bindCss]',
})
export class BindCssDirective {
  @Input('variableName') variableName: string;
  @Input('variableValue') variableValue: string;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.host.nativeElement.style.setProperty(`--${this.variableName}`, this.variableValue);
  }
}
