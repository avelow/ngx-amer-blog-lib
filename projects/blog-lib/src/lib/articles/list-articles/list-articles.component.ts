import { Router } from '@angular/router';
import { SidebarService } from './../../sidebar.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Article, BlogService } from '../../blog-lib.interfaces';
import { BLOG_SERVICE_TOKEN } from '../../blog-lib.tokens';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'amer-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(
    @Inject(BLOG_SERVICE_TOKEN) private service: BlogService,
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  /**
   * Load article on init.
   */
  ngOnInit() {
    this.articles$ = this.service.getArticles();
  }

  /**
   * Set the current sidebar status has default and navigate to the url.
   * @param url the url to navigate
   */
  navigateAndUseDefaultSidebar(url: string) {
    this.sidebarService.useDefault();
    this.router.navigate([url]);
  }
}
