import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BlogLibModule} from "../../projects/blog-lib/src/lib/blog-lib.module";
import {BlogLibComponent} from "../../projects/blog-lib/src/lib/blog-lib.component";
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BlogLibModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let sidebarElement = fixture.debugElement.query(By.css('div[sidebar]'));
    expect(app).toBeTruthy();
    expect(sidebarElement).toBeTruthy();
  }));
});
