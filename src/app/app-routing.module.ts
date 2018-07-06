import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BLOG_ROUTES} from 'blog-lib';


@NgModule({
  imports: [
    RouterModule.forRoot(BLOG_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
