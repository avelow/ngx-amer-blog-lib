import {ModuleWithProviders, NgModule, Optional, Provider, SkipSelf} from '@angular/core';
import { BlogLibComponent } from './blog-lib.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { CommonModule } from '@angular/common';
import { BackgroundImageModule } from 'ngx-amer-directives';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BackgroundImageModule,
  ],
  declarations: [BlogLibComponent, ListArticlesComponent],
  exports: [BlogLibComponent]
})
export class BlogLibModule {

  constructor(@Optional() @SkipSelf() module: BlogLibModule) {
    if (module) {
      throw new Error('BlogLibModule can be import only once');
    } else {

    }
  }

  static forRoot(provider: Provider): ModuleWithProviders {
    return {
      ngModule: BlogLibModule,
      providers: [ provider ]
    };
  }

}
