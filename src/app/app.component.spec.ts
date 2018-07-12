import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import {
  Article,
  BLOG_ROUTES,
  BlogService,
  BLOG_SERVICE_TOKEN,
  BlogLibModule
} from 'blog-lib';
import { RouterTestingModule } from '@angular/router/testing';

class FakeBlogService implements BlogService {
  getArticleBySlug(slug: string): Observable<Article> {
    return of({
      author: 'Auteur',
      title: 'Le poker : un jeu de probabilités ou de chances ?',
      publishedDate: '10/10/10',
      cover: {
        alt: 'alt',
        src:
          'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
      },
      slug: 'titre-1',
      filePath: 'no-file'
    });
  }

  getArticles() {
    return of([
      {
        author: 'Auteur',
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'titre-1',
        filePath: 'no-file'
      },
      {
        author: 'Auteur',
        title: 'Le pokzerzrz ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'rzerezrezrez-1',
        filePath: 'no-file'
      }
    ]);
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(BLOG_ROUTES),
        BlogLibModule.forRoot({
          provide: BLOG_SERVICE_TOKEN,
          useClass: FakeBlogService
        })
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const sidebarElement = fixture.debugElement.query(By.css('div[sidebar]'));
    expect(app).toBeTruthy();
    expect(sidebarElement).toBeTruthy();
  }));
});
