import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BlogLibModule} from "../../projects/blog-lib/src/lib/blog-lib.module";

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
    expect(app).toBeTruthy();
  }));
});
