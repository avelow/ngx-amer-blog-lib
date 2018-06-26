import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticlesComponent } from './list-articles.component';
import { BackgroundImageModule } from 'ngx-amer-directives';
import {Component} from '@angular/core';
import {Article} from '../../blog-lib.interfaces';
import {By} from '@angular/platform-browser';
import {click} from 'ngx-amer-tests-utilities';

@Component({
  template: `<amer-list-articles [articles]="articles" (openArticle)="onOpenArticle()"></amer-list-articles>`
})
class TestHostComponent {
  articles: Article[] = [
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
  ];
  onOpenArticle() { }
}

//////////////////////////////////////////////////////////////////////

describe('ListArticlesComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BackgroundImageModule ],
      declarations: [ ListArticlesComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on open event on click', () => {
    // GIVEN
    spyOn(component, 'onOpenArticle');

    // WHEN
    const article = fixture.debugElement.query(By.css('#titre-1'));
    click(article);

    // THEN
    expect(component.onOpenArticle).toHaveBeenCalled();
  });

  it('should display all articles', () => {
    // GIVEN
    const articles = fixture.debugElement.queryAll(By.css('.preview'));

    // THEN
    expect(articles.length).toEqual(2);
  });
});
