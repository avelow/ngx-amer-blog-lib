import { TestBed, inject } from '@angular/core/testing';

import { BlogLibService } from './blog-lib.service';
import {of} from "rxjs/internal/observable/of";
import {BlogService} from "./blog-lib.interfaces";
import {BLOG_SERVICE_TOKEN} from "./blog-lib.tokens";

describe('BlogLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BlogLibService,
        {provide: BLOG_SERVICE_TOKEN, useClass: BlogServiceFake}
      ],
    });
  });

  it('should be created', inject([BlogLibService], (service: BlogLibService) => {
    expect(service).toBeTruthy();
  }));
});

class BlogServiceFake implements BlogService {
  loadArticles() {
    return of(true);
  } ;
  getArticles() {
    return [];
  };
  setCurrentArticle(Article) {};
  getCurrentArticle() {
    return null;
  };
}
