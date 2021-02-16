import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // @ts-ignore
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // @ts-ignore
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false);
  }


}
