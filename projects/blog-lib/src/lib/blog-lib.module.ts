import { NgModule } from '@angular/core';
import { BlogLibComponent } from './blog-lib.component';
import { BlogLibService } from './blog-lib.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
  ],
  declarations: [BlogLibComponent],
  providers: [BlogLibService],
  exports: [BlogLibComponent]
})
export class BlogLibModule { }
