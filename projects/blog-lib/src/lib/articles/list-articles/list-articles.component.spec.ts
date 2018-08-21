import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticlesComponent } from './list-articles.component';
import { BackgroundImageModule } from 'ngx-amer-directives';
import { Component } from '@angular/core';
import { BlogService } from '../../blog-lib.interfaces';
import { By } from '@angular/platform-browser';
import { BLOG_SERVICE_TOKEN } from '../../blog-lib.tokens';
import { FakeBlogService } from '../../../tests/fake-blog-lib.service';
import { RouterTestingModule } from '@angular/router/testing';
import { click } from 'ngx-amer-tests-utilities';
import { Router } from '@angular/router';
import { SidebarService } from '../../sidebar.service';

@Component({
  template: `<amer-list-articles></amer-list-articles>`
})
class TestHostComponent {}

//////////////////////////////////////////////////////////////////////

describe('ListArticlesComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let service: BlogService;
  let sidebarService: SidebarService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BackgroundImageModule],
      declarations: [ListArticlesComponent, TestHostComponent],
      providers: [
        { provide: BLOG_SERVICE_TOKEN, useClass: FakeBlogService },
        { provide: SidebarService, useClass: SidebarService },
        SidebarService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BLOG_SERVICE_TOKEN);
    router = TestBed.get(Router);
    sidebarService = TestBed.get(SidebarService);
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
    spyOn(router, 'navigate');
    spyOn(sidebarService, 'useDefault');

    // WHEN
    fixture.detectChanges();
    const firstArticle = fixture.debugElement.query(By.css('#titre-1'));
    const secondArticle = fixture.debugElement.query(By.css('#titre-2'));
    click(firstArticle);

    // THEN
    expect(firstArticle).toBeTruthy();
    expect(secondArticle).toBeTruthy();

    expect(sidebarService.useDefault).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['titre-1']);
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
