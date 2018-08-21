import { TestBed, async } from '@angular/core/testing';

import { SidebarService } from './sidebar.service';

describe('SidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarService]
    });
    service = TestBed.get(SidebarService);
  });

  it('should be opened at the init and default value should be false', async(() => {
    // GIVEN / THEN
    expect(service._isCollapsed.getValue()).toBeFalsy();
    service.isCollapsed().subscribe(value => expect(value).toBeFalsy());
    expect(service._isCollapsedDefault).toBeFalsy();
  }));

  it('should change on toggle', async () => {
    // GIVEN
    expect(service._isCollapsed.getValue()).toBeFalsy();

    // WHEN
    service.toggleCollapsed();

    // THEN
    service.isCollapsed().subscribe(value => expect(value).toBeTruthy());
  });
});
