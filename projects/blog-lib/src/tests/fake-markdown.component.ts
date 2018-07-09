import { Input, Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'markdown',
  template: ''
})
export class FakeMarkdownComponent {
  @Input() src: string;
}
