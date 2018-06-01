import { TestBed, inject } from '@angular/core/testing';

import { BlogLibService } from './blog-lib.service';

describe('BlogLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogLibService]
    });
  });

  it('should be created', inject([BlogLibService], (service: BlogLibService) => {
    expect(service).toBeTruthy();
  }));
});
