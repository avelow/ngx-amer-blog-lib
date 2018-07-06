import { Component, Inject, OnInit } from '@angular/core';
import { Article, BlogService } from '../../blog-lib.interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { BLOG_SERVICE_TOKEN } from '../../blog-lib.tokens';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'amer-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  article$: Observable<Article>;

  constructor(
    @Inject(BLOG_SERVICE_TOKEN) private service: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('slug')),
      switchMap((slug: string) => this.service.getArticleBySlug(slug))
    );
  }
}
