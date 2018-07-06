import { FakeMarkdownComponent } from './../../../tests/fake-markdown.component';
import { MarkdownModule, MarkdownComponent } from 'ngx-markdown';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImageModule } from 'ngx-amer-directives';
import { Component, Input } from '@angular/core';
import { BlogService } from '../../blog-lib.interfaces';
import { BLOG_SERVICE_TOKEN } from '../../blog-lib.tokens';
import { FakeBlogService } from '../../blog-lib.component.spec';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ViewArticleComponent } from './view-article.component';
import { ActivatedRouteStub } from 'ngx-amer-tests-utilities';

@Component({
  template: `<amer-view-article></amer-view-article>`
})
class TestHostComponent {}

//////////////////////////////////////////////////////////////////////

describe('ViewArticleComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let service: BlogService;
  const activatedRouteStub = new ActivatedRouteStub({
    slug: 'titre-1'
  });

  beforeEach(async(() => {
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
        BackgroundImageModule,
        RouterTestingModule,
        MarkdownModule.forRoot()
      ],
      declarations: [ViewArticleComponent, TestHostComponent],
      providers: [
        { provide: BLOG_SERVICE_TOKEN, useClass: FakeBlogService },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BLOG_SERVICE_TOKEN);
  });

  it('should call getArticleBySlug with the correct slug', () => {
    // GIVEN
    spyOn(service, 'getArticleBySlug').and.callThrough();

    // WHEN
    fixture.detectChanges();

    // THEN
    expect(service.getArticleBySlug).toHaveBeenCalledWith('titre-1');
  });

  it('should call getArticleBySlug on params change', () => {
    // GIVEN
    spyOn(service, 'getArticleBySlug').and.callThrough();

    // WHEN
    fixture.detectChanges();

    // THEN
    expect(service.getArticleBySlug).toHaveBeenCalledWith('titre-1');
    expect(service.getArticleBySlug).not.toHaveBeenCalledWith('titre-2');

    // WHEN
    activatedRouteStub.setParamMap({ slug: 'titre-2' });
    fixture.detectChanges();
    expect(service.getArticleBySlug).toHaveBeenCalledWith('titre-2');
  });
});
