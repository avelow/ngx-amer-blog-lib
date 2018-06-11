import {AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[amer-background-image]'
})
export class BackgroundImageDirective implements OnChanges, AfterViewInit {

  /**
   * The element hosting the directive
   */
  private el: HTMLElement;

  /**
   * the background image url
   */
  @Input('amer-background-image') backgroundImage: string;

  /**
   * The background size
   */
  @Input('amer-background-size') backgroundSize: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.el = this.elRef.nativeElement;
  }

  /**
   * Init the background image at first loading
   */
  ngAfterViewInit() {
    this.setBackgroundImage();
    this.setBackgroundSize();
  }

  /**
   * Update the background image on change of the values of the input
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['amer-background-image']) {
      this.backgroundImage = changes['amer-background-image'].currentValue;
      this.setBackgroundImage();
    }
    if (changes['amer-background-size']) {
      this.backgroundSize = changes['amer-background-size'].currentValue;
      this.setBackgroundSize();
    }
  }

  /**
   * Set the background image
   */
  setBackgroundImage() {
    this.renderer.setStyle(this.el, "backgroundImage", `url(${ this.backgroundImage })`);
  }

  /**
   * Set the background size
   */
  setBackgroundSize() {
    this.renderer.setStyle(this.el, "backgroundSize", this.backgroundSize);
  }
}
