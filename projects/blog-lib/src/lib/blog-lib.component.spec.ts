import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLibComponent } from './blog-lib.component';
import {Article, BlogService} from "./blog-lib.interfaces";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";
import {BLOG_SERVICE_TOKEN} from "./blog-lib.tokens";

describe('BlogLibComponent', () => {
  let component: BlogLibComponent;
  let fixture: ComponentFixture<BlogLibComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ BlogLibComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
