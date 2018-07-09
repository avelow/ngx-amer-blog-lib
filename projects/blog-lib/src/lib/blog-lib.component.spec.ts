import { FakeBlogService } from '../tests/fake-blog-lib.service';
import { FakeMarkdownComponent } from '../tests/fake-markdown.component';
import { MarkdownModule, MarkdownComponent } from 'ngx-markdown';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogLibComponent } from './blog-lib.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BackgroundImageModule } from 'ngx-amer-directives';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule, Location } from '@angular/common';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { BLOG_SERVICE_TOKEN } from './blog-lib.tokens';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BLOG_ROUTES } from './blog-lib.routing';
import { ViewArticleComponent } from './articles/view-article/view-article.component';

@Component({
  template: `
    <amer-blog-lib>
      <div sidebar><h1 id="testH1">this is a test</h1></div>
      <div fakeSidebar><h1 id="fakeTestH1">this is a fake test</h1></div>
    </amer-blog-lib>`
})
class TestHostComponent {}

//////////////////////////////////////////////////////////////////////

describe('BlogLibComponent', () => {
  let hostComponent: TestHostComponent;
  let blogComponent: BlogLibComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.overrideModule(MarkdownModule, {
      remove: {
        declarations: [MarkdownComponent],
        exports: [MarkdownComponent]
      },
      add: {
        declarations: [FakeMarkdownComponent],
        exports: [FakeMarkdownComponent]
      }
    });

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(BLOG_ROUTES),
        CommonModule,
        FlexLayoutModule,
        BackgroundImageModule,
        MarkdownModule
      ],
      providers: [{ provide: BLOG_SERVICE_TOKEN, useClass: FakeBlogService }],
      declarations: [
        ViewArticleComponent,
        BlogLibComponent,
        ListArticlesComponent,
        TestHostComponent
      ]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    hostComponent = fixture.componentInstance;
    const blogDebugElement = fixture.debugElement.query(
      By.directive(BlogLibComponent)
    );
    blogComponent = blogDebugElement.componentInstance;

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
    expect(blogComponent).toBeTruthy();
  });

  it('should have the h1 in the sidebar', () => {
    const sidebarH1 = fixture.debugElement.query(By.css('#testH1'))
      .nativeElement;

    expect(sidebarH1.innerHTML).toEqual('this is a test');
    expect(sidebarH1.tagName).toEqual('H1');
  });

  it('should not display the fakesidebar', () => {
    const fakeSidebarH1 = fixture.debugElement.query(By.css('#fakeTestH1'));

    expect(fakeSidebarH1).toBeNull();
  });

  it('should display the list article', async(() => {
    // GIVEN
    // TODO: 03/07/2018 : create navigate function in a page
    router.navigate(['']).then(() => {
      // WHEN
      fixture.detectChanges();

      // THEN
      const listArticles = fixture.debugElement.query(
        By.css('amer-list-articles')
      );
      expect(listArticles).toBeTruthy();
      const firstArticle = fixture.debugElement.query(By.css('#titre-1'));
      const secondArticle = fixture.debugElement.query(By.css('#titre-2'));
      expect(firstArticle).toBeTruthy();
      expect(secondArticle).toBeTruthy();
    });
  }));
});
