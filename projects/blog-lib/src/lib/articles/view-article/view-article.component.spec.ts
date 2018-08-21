import { FakeBlogService } from './../../../tests/fake-blog-lib.service';
import { By } from '@angular/platform-browser';
import { FakeMarkdownComponent } from '../../../tests/fake-markdown.component';
import { MarkdownModule, MarkdownComponent } from 'ngx-markdown';
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from '@angular/core/testing';

import { BackgroundImageModule } from 'ngx-amer-directives';
import { Component, Input } from '@angular/core';
import { BlogService } from '../../blog-lib.interfaces';
import { BLOG_SERVICE_TOKEN } from '../../blog-lib.tokens';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewArticleComponent } from './view-article.component';
import { ActivatedRouteStub, click } from 'ngx-amer-tests-utilities';
import { of } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { SidebarService } from '../../sidebar.service';

@Component({
  template: `<amer-view-article></amer-view-article>`
})
class TestHostComponent {}

//////////////////////////////////////////////////////////////////////

describe('ViewArticleComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let service: BlogService;
  let router: Router;
  let sidebarService: SidebarService;
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
        MaterialModule,
        BackgroundImageModule,
        RouterTestingModule,
        MarkdownModule.forRoot()
      ],
      declarations: [ViewArticleComponent, TestHostComponent],
      providers: [
        { provide: BLOG_SERVICE_TOKEN, useClass: FakeBlogService },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
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

  it('should have the markdown component with the good input', () => {
    // GIVEN
    fixture.detectChanges();
    const markdownComponent = fixture.debugElement.query(
      By.directive(FakeMarkdownComponent)
    ).componentInstance;

    // THEN
    expect(markdownComponent.src).toEqual('no-file-1');
  });

  it('should not display the date and the author if the author is missing', () => {
    // GIVEN
    spyOn(service, 'getArticleBySlug').and.returnValue(
      of({
        author: '',
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'titre-1',
        filePath: 'no-file-1'
      })
    );

    // WHEN
    fixture.detectChanges();

    // THEN
    expect(fixture.debugElement.query(By.css('h3.subheading-2'))).toBeFalsy();
  });

  it('should not display the date and the author if the date is missing', () => {
    // GIVEN
    spyOn(service, 'getArticleBySlug').and.returnValue(
      of({
        author: 'Auteur',
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'titre-1',
        filePath: 'no-file-1'
      })
    );

    // WHEN
    fixture.detectChanges();

    // THEN
    expect(fixture.debugElement.query(By.css('h3.subheading-2'))).toBeFalsy();
  });

  it('should not display the date and the author if both are missing', () => {
    // GIVEN
    spyOn(service, 'getArticleBySlug').and.returnValue(
      of({
        author: '',
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'titre-1',
        filePath: 'no-file-1'
      })
    );

    // WHEN
    fixture.detectChanges();

    // THEN
    expect(fixture.debugElement.query(By.css('h3.subheading-2'))).toBeFalsy();
  });

  it('should display the date and the author if both are present', () => {
    // GIVEN
    spyOn(service, 'getArticleBySlug').and.returnValue(
      of({
        author: 'Auteur',
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '10/08/2018',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'titre-1',
        filePath: 'no-file-1'
      })
    );

    // WHEN
    fixture.detectChanges();

    // THEN
    expect(fixture.debugElement.query(By.css('h3.subheading-2'))).toBeTruthy();
  });

  it('should set the default value for collapsed sidebar on going back to the list', () => {
    // GIVEN
    spyOn(sidebarService, 'setCurrentAsDefault');
    spyOn(sidebarService, 'open');
    spyOn(router, 'navigate');

    // WHEN
    fixture.detectChanges();
    const backToListBtn = fixture.debugElement.query(By.css('#backToListBtn'));
    click(backToListBtn);

    // THEN
    expect(sidebarService.setCurrentAsDefault).toHaveBeenCalled();
    expect(sidebarService.open).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should have the correct fullscreen icon', fakeAsync(() => {
    // GIVEN
    sidebarService.open();
    fixture.detectChanges();
    const toggleBtn = fixture.debugElement.query(By.css('#toggleCollapseBtn'));
    expect(fixture.debugElement.query(By.css('#icon-fullscreen'))).toBeTruthy();
    expect(
      fixture.debugElement.query(By.css('#icon-fullscreen-exit'))
    ).toBeFalsy();

    // WHEN
    click(toggleBtn);
    fixture.detectChanges();

    // THEN
    expect(fixture.debugElement.query(By.css('#icon-fullscreen'))).toBeFalsy();
    expect(
      fixture.debugElement.query(By.css('#icon-fullscreen-exit'))
    ).toBeTruthy();

    // WHEN
    click(toggleBtn);
    fixture.detectChanges();

    // THEN
    expect(fixture.debugElement.query(By.css('#icon-fullscreen'))).toBeTruthy();
    expect(
      fixture.debugElement.query(By.css('#icon-fullscreen-exit'))
    ).toBeFalsy();
  }));
});
