import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogLibModule, BLOG_SERVICE_TOKEN } from 'blog-lib';
import { MyBlogService } from './my-blog.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    BlogLibModule.forRoot({
      provide: BLOG_SERVICE_TOKEN,
      useClass: MyBlogService
    }),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
