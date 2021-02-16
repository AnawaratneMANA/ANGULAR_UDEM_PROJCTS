import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // @ts-ignore
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // @ts-ignore
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false);
    this.backgroundColor = 'transparent';
  }


}
