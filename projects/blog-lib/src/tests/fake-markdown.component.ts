import { Input, Component } from '@angular/core';

@Component({
  selector: 'markdown',
  template: ''
})
export class FakeMarkdownComponent {
  @Input() src: string;
}
