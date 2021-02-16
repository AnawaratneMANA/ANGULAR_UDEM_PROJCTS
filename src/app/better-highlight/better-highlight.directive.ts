import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlighColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // @ts-ignore
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
    this.backgroundColor = this.highlighColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // @ts-ignore
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false);
    this.backgroundColor = this.defaultColor;
  }


}
