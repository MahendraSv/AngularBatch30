import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
    el.nativeElement.style.color = true ? 'red' : 'green';
    // el.nativeElement.style.textDecoration = 'underline';
   }

   @HostListener('mouseenter') mouseenter() {
     this.el.nativeElement.style.textDecoration = 'underline';
   }

   @HostListener('mouseleave') mouseleave() {
    this.el.nativeElement.style.textDecoration = 'none';
  }
}
