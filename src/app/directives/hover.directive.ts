import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input('appHover') styles: {fontSize: string, borderColor: string};
  @HostBinding('style.fontSize') textSize: string;
  @HostBinding('style.borderColor') color: string;

  constructor() {}

  @HostListener('mouseenter') onEnter() {
    this.textSize = this.styles.fontSize;
    this.color = this.styles.borderColor;
  }

  @HostListener('mouseleave') onLeave() {
    this.textSize = '';
    this.color = '';
  }
}
