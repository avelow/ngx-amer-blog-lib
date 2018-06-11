import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogLibComponent } from './blog-lib.component';
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";
import {BackgroundImageModule} from "./background-image/background-image.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {ListArticlesComponent} from "./articles/list-articles/list-articles.component";

@Component({
  template: `
    <amer-blog-lib>
      <div sidebar><h1 id="testH1">this is a test</h1></div>
      <div fakeSidebar><h1 id="fakeTestH1">this is a fake test</h1></div>
    </amer-blog-lib>`
})
class TestHostComponent {
}

//////////////////////////////////////////////////////////////////////

describe('BlogLibComponent', () => {
  let hostComponent: TestHostComponent;
  let blogComponent: BlogLibComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostElement: any;
  let blogElement: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FlexLayoutModule,
        BackgroundImageModule,
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
    let blogDebugElement = fixture.debugElement.query(By.directive(BlogLibComponent));
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
});
