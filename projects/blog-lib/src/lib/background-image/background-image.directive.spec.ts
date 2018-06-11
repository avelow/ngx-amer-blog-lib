import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, OnChanges, SimpleChange, SimpleChanges, ViewChild} from "@angular/core";
import {BackgroundImageDirective} from "./background-image.directive";
import {By} from "@angular/platform-browser";

@Component({
  template: `<div #directive [amer-background-image]="url" [amer-background-size]="size"></div>`
})
class TestHostComponent {
  @ViewChild(BackgroundImageDirective) directive;
  url: string;
  size: string;
}

//////////////////////////////////////////////////////////////////////

describe('BackgroundImageDirective', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let directiveElement: any;
  const originalUrl = 'originalUrl';
  // Seems that incorrect value are not accepted (it keep the last correct value or '')
  const originalSize = 'cover';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundImageDirective, TestHostComponent ],
    });

    fixture  = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    hostComponent.url = originalUrl;
    hostComponent.size = originalSize;
    fixture.detectChanges();
    directiveElement = fixture.debugElement.query(By.directive(BackgroundImageDirective)).nativeElement;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should have the background-image url and size with correct value', () => {
    // GIVEN
    const originalUrlProperty = 'url("' + originalUrl + '")';
    expect(directiveElement.style.getPropertyValue('background-size')).toEqual(originalSize);
    expect(directiveElement.style.getPropertyValue('background-image')).toEqual(originalUrlProperty);
    const expectedUrl = 'expectedUrl';
    const expectedUrlProperty = 'url("' + expectedUrl + '")';
    const expectedSize = 'contain';

    // WHEN
    hostComponent.directive.ngOnChanges({
      'amer-background-image': new SimpleChange(originalUrl, expectedUrl, false),
      'amer-background-size': new SimpleChange(originalSize, expectedSize, false),
    });
    fixture.detectChanges();

    // THEN
    expect(directiveElement.style.getPropertyValue('background-image')).toEqual(expectedUrlProperty);
    expect(directiveElement.style.getPropertyValue('background-size')).toEqual(expectedSize);
  });

  it('should have the background-image url correct value', () => {
    // GIVEN
    fixture.detectChanges();
    const originalUrlProperty = 'url("' + originalUrl + '")';
    expect(directiveElement.style.getPropertyValue('background-size')).toEqual(originalSize);
    expect(directiveElement.style.getPropertyValue('background-image')).toEqual(originalUrlProperty);
    const expectedUrl = 'expectedUrl';
    const expectedUrlProperty = 'url("' + expectedUrl + '")';


    // WHEN
    hostComponent.directive.ngOnChanges({
      'amer-background-image': new SimpleChange(originalUrl, expectedUrl, false),
    });
    fixture.detectChanges();

    // THEN
    expect(directiveElement.style.getPropertyValue('background-image')).toEqual(expectedUrlProperty);
    expect(directiveElement.style.getPropertyValue('background-size')).toEqual(originalSize);
  });

  it('should have the background-size correct value', () => {
    // GIVEN
    fixture.detectChanges();
    const originalUrlProperty = 'url("' + originalUrl + '")';
    expect(directiveElement.style.getPropertyValue('background-size')).toEqual(originalSize);
    expect(directiveElement.style.getPropertyValue('background-image')).toEqual(originalUrlProperty);
    const expectedSize = 'contain';

    // WHEN
    hostComponent.directive.ngOnChanges({
      'amer-background-size': new SimpleChange(originalSize, expectedSize, false),
    });
    fixture.detectChanges();

    // THEN
    expect(directiveElement.style.getPropertyValue('background-image')).toEqual(originalUrlProperty);
    expect(directiveElement.style.getPropertyValue('background-size')).toEqual(expectedSize);
  });
});
