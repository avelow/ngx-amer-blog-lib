import {Inject, Injectable} from '@angular/core';
import {BLOG_SERVICE_TOKEN} from "./blog-lib.tokens";
import {BlogService} from "./blog-lib.interfaces";

@Injectable({
  providedIn: 'root'
})
export class BlogLibService {

  constructor(@Inject(BLOG_SERVICE_TOKEN) private service: BlogService) { }
}
