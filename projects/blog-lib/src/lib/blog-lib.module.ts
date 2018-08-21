import { SidebarService } from './sidebar.service';
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
  /**
   * Constructor checking that the BlogLibModule is instantiate only once.
   * @param module the BlogLibModule
   */
  constructor(
    @Optional()
    @SkipSelf()
    private module: BlogLibModule
  ) {
    if (this.module !== null && this.module !== undefined) {
      throw new Error(
        'BlogLibModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  /**
   * Function used to initiate the BlogLibModule.
   * @param provider the provider providing the BlogService implementation
   */
  static forRoot(provider: Provider): ModuleWithProviders {
    return {
      ngModule: BlogLibModule,
      providers: [provider, SidebarService]
    };
  }
}
