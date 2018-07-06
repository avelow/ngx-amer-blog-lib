import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogLibModule } from 'blog-lib';
import { BLOG_SERVICE_TOKEN } from 'blog-lib';
import { MyBlogService } from './my-blog.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogLibModule.forRoot({
      provide: BLOG_SERVICE_TOKEN,
      useClass: MyBlogService
    }),
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
