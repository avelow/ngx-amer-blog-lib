import {Component, Inject, OnInit} from '@angular/core';
import {Article, BlogService} from './blog-lib.interfaces';
import {BLOG_SERVICE_TOKEN} from './blog-lib.tokens';

@Component({
  selector: 'amer-blog-lib',
  templateUrl: './blog-lib.component.html',
  styleUrls: ['./blog-lib.component.scss'],
})
export class BlogLibComponent implements OnInit {

  articles: Article[] = [];

  constructor(@Inject(BLOG_SERVICE_TOKEN) private service: BlogService) { }

  ngOnInit() {
    this.service.getArticles().subscribe(articles => this.articles = articles);
  }

}
