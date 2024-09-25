import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true
})
export class ClickDirective {

  constructor() { }

  count=0

  @HostListener('click') karannnnnnnn() {
    console.log('Mouse entered',this.count++);
  }

}
