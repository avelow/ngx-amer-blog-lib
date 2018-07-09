import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticlesComponent } from './list-articles.component';
import { BackgroundImageModule } from 'ngx-amer-directives';
import { Component } from '@angular/core';
import { BlogService } from '../../blog-lib.interfaces';
import { By } from '@angular/platform-browser';
import { BLOG_SERVICE_TOKEN } from '../../blog-lib.tokens';
import { FakeBlogService } from '../../../tests/fake-blog-lib.service';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  template: `<amer-list-articles></amer-list-articles>`
})
class TestHostComponent {}

//////////////////////////////////////////////////////////////////////

describe('ListArticlesComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let service: BlogService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BackgroundImageModule],
      declarations: [ListArticlesComponent, TestHostComponent],
      providers: [{ provide: BLOG_SERVICE_TOKEN, useClass: FakeBlogService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BLOG_SERVICE_TOKEN);
  });

  it('should create', () => {
    // GIVEN
    spyOn(service, 'getArticles').and.callThrough();

    // WHEN
    fixture.detectChanges();

    // THEN
    expect(service.getArticles).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should have the good article link', () => {
    // GIVEN

    // WHEN
    fixture.detectChanges();
    const firstArticle = fixture.debugElement.query(By.css('#titre-1'));
    const secondArticle = fixture.debugElement.query(By.css('#titre-2'));

    // THEN
    expect(firstArticle).toBeTruthy();
    expect(firstArticle.nativeElement.href).toEqual(
      'http://localhost:9876/titre-1'
    );
    expect(secondArticle).toBeTruthy();
    expect(secondArticle.nativeElement.href).toEqual(
      'http://localhost:9876/titre-2'
    );
  });

  it('should display all articles', () => {
    // GIVEN

    // WHEN
    fixture.detectChanges();

    // THEN
    const articles = fixture.debugElement.queryAll(By.css('.preview'));
    expect(articles.length).toEqual(2);
  });
});
