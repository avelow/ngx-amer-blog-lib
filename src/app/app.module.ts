import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogLibModule } from 'blog-lib';
import {BLOG_SERVICE_TOKEN} from 'blog-lib';
import {MyBlogService} from './my-blog.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BlogLibModule.forRoot({ provide: BLOG_SERVICE_TOKEN, useClass: MyBlogService }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
