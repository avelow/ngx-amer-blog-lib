import { MaterialModule } from './material.module';
import { FakeBlogService } from '../tests/fake-blog-lib.service';
import { FakeMarkdownComponent } from '../tests/fake-markdown.component';
import { MarkdownModule, MarkdownComponent } from 'ngx-markdown';
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { BlogLibComponent } from './blog-lib.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BackgroundImageModule } from 'ngx-amer-directives';
import { CommonModule } from '@angular/common';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { BLOG_SERVICE_TOKEN } from './blog-lib.tokens';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BLOG_ROUTES } from './blog-lib.routing';
import { ViewArticleComponent } from './articles/view-article/view-article.component';
import { SidebarService } from './sidebar.service';
import { componentRefresh } from '@angular/core/src/render3/instructions';

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
  let sidebarService: SidebarService;

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
        MaterialModule,
        BackgroundImageModule,
        MarkdownModule
      ],
      providers: [
        { provide: BLOG_SERVICE_TOKEN, useClass: FakeBlogService },
        SidebarService
      ],
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
    sidebarService = TestBed.get(SidebarService);
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

  it('should show the sidebar in function of the sidebarService', fakeAsync(() => {
    // WHEN
    sidebarService.open();
    tick();
    fixture.detectChanges();

    // THEN
    const sidebar = fixture.debugElement.query(By.css('.sidebar'));
    expect(sidebar.nativeElement.style.display).not.toEqual('none');
  }));

  it('should hide the sidebar in function of the sidebarService', fakeAsync(() => {
    // GIVEN
    const sidebar = fixture.debugElement.query(By.css('.sidebar'));
    expect(sidebar.nativeElement.style.display).not.toEqual('none');

    // WHEN
    sidebarService.collapse();
    tick();
    fixture.detectChanges();

    // THEN
    expect(sidebar.nativeElement.style.display).toEqual('none');
  }));

  // TODO : 21/08/2018 AMER Test affichage sidebar avec taille xs
});
