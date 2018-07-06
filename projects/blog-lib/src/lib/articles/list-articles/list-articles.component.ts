import {Component, Inject, OnInit} from '@angular/core';
import {Article, BlogService} from '../../blog-lib.interfaces';
import {BLOG_SERVICE_TOKEN} from '../../blog-lib.tokens';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'amer-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(@Inject(BLOG_SERVICE_TOKEN) private service: BlogService) { }

  ngOnInit() {
    this.articles$ = this.service.getArticles();
  }
}
