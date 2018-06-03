import { NgModule } from '@angular/core';
import { BlogLibComponent } from './blog-lib.component';
import { BlogLibService } from './blog-lib.service';

@NgModule({
  imports: [
  ],
  declarations: [BlogLibComponent],
  providers: [BlogLibService],
  exports: [BlogLibComponent]
})
export class BlogLibModule { }
