import {
  ModuleWithProviders,
  NgModule,
  Optional,
  Provider,
  SkipSelf
} from '@angular/core';
import { BlogLibComponent } from './blog-lib.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { CommonModule } from '@angular/common';
import { BackgroundImageModule } from 'ngx-amer-directives';
import { ViewArticleComponent } from './articles/view-article/view-article.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    BackgroundImageModule,
    RouterModule,
    MaterialModule,
    MarkdownModule.forChild()
  ],
  declarations: [BlogLibComponent, ListArticlesComponent, ViewArticleComponent],
  exports: [BlogLibComponent]
})
export class BlogLibModule {
  constructor(
    @Optional()
    @SkipSelf()
    module: BlogLibModule
  ) {}

  static forRoot(provider: Provider): ModuleWithProviders {
    return {
      ngModule: BlogLibModule,
      providers: [provider]
    };
  }
}
