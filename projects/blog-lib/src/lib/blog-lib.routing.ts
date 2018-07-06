import { ViewArticleComponent } from './articles/view-article/view-article.component';
import { Routes } from '@angular/router';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';

export const BLOG_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListArticlesComponent
  },
  {
    path: ':slug',
    component: ViewArticleComponent
  }
];
