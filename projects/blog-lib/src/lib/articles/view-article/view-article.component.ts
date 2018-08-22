import { SidebarService } from './../../sidebar.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { Article, BlogService } from '../../blog-lib.interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { BLOG_SERVICE_TOKEN } from '../../blog-lib.tokens';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'amer-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {
  /**
   * Observable of the current article.
   */
  article$: Observable<Article>;

  /**
   * Define if the article is in fullsreen or not.
   */
  isFullScreen: boolean;

  constructor(
    @Inject(BLOG_SERVICE_TOKEN) private service: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private sidebarService: SidebarService
  ) {}

  /**
   * Load the article corresponding to the slug
   * and listen the to sidebarService to know if it's fullscreen or not.
   */
  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('slug')),
      switchMap((slug: string) => this.service.getArticleBySlug(slug))
    );

    this.sidebarService
      .isCollapsed()
      .subscribe(isFullscreen => (this.isFullScreen = isFullscreen));
  }

  /**
   * Toggle the sidebar
   */
  toggleCollapse() {
    this.sidebarService.toggleCollapsed();
  }

  /**
   * Set the current sidebar status as default, open the sidebar and then redirect to the list.
   */
  backToList() {
    this.sidebarService.setCurrentAsDefault();
    this.sidebarService.open();
    this.router.navigate(['/']);
  }
}
