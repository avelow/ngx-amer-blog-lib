import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogLibComponent } from './blog-lib.component';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {BackgroundImageModule} from './background-image/background-image.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {ListArticlesComponent} from './articles/list-articles/list-articles.component';
import {Article, BlogService} from './blog-lib.interfaces';
import {BLOG_SERVICE_TOKEN} from './blog-lib.tokens';
import {of} from 'rxjs/internal/observable/of';

@Component({
  template: `
    <amer-blog-lib>
      <div sidebar><h1 id="testH1">this is a test</h1></div>
      <div fakeSidebar><h1 id="fakeTestH1">this is a fake test</h1></div>
    </amer-blog-lib>`
})
class TestHostComponent {
}

class FakeBlogService implements BlogService {
  getArticles() {
    return of([
      {
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src: 'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg',
        },
        slug: 'titre-1',
        filePath: 'no-file',
      }, {
        title: 'Le pokzerzrz ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src: 'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg',
        },
        slug: 'rzerezrezrez-1',
        filePath: 'no-file',
      },
    ]);
  }

  setCurrentArticle(article) {
  }

  getCurrentArticle() {
    return {
      title: 'Le poker : un jeu de probabilités ou de chances ?',
      publishedDate: '10/10/10',
      cover: {
        alt: 'alt',
        src: 'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg',
      },
      slug: 'titre-1',
      filePath: 'no-file',
    };
  }
}

//////////////////////////////////////////////////////////////////////

describe('BlogLibComponent', () => {
  let hostComponent: TestHostComponent;
  let blogComponent: BlogLibComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FlexLayoutModule,
        BackgroundImageModule,
      ],
      providers: [
        { provide: BLOG_SERVICE_TOKEN, useClass: FakeBlogService }
      ],
      declarations: [
        BlogLibComponent,
        ListArticlesComponent,
        TestHostComponent
      ],
    });

    fixture  = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    hostComponent = fixture.componentInstance;
    const blogDebugElement = fixture.debugElement.query(By.directive(BlogLibComponent));
    blogComponent = blogDebugElement.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
    expect(blogComponent).toBeTruthy();
  });

  it('should have the h1 in the sidebar', () => {
    const sidebarH1 = fixture.debugElement.query(By.css('#testH1')).nativeElement;

    expect(sidebarH1.innerHTML).toEqual('this is a test');
    expect(sidebarH1.tagName).toEqual('H1');
  });

  it('should not display the fakesidebar', () => {
    const fakeSidebarH1 = fixture.debugElement.query(By.css('#fakeTestH1'));

    expect(fakeSidebarH1).toBeNull();
  });

  xit('should display the list articles', () => {
    // TODO: test list is imported
  });
});
