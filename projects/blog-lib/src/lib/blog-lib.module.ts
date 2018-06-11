import { NgModule } from '@angular/core';
import { BlogLibComponent } from './blog-lib.component';
import { BlogLibService } from './blog-lib.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ListArticlesComponent} from "./articles/list-articles/list-articles.component";
import {CommonModule} from "@angular/common";
import {BackgroundImageModule} from "./background-image/background-image.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BackgroundImageModule,
  ],
  declarations: [BlogLibComponent, ListArticlesComponent],
  exports: [BlogLibComponent]
})
export class BlogLibModule { }
