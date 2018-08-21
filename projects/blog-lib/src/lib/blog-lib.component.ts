import { Observable } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'amer-blog-lib',
  templateUrl: './blog-lib.component.html',
  styleUrls: ['./blog-lib.component.scss']
})
export class BlogLibComponent {
  constructor(private sidebarService: SidebarService) {
    this.isCollapsed$ = sidebarService.isCollapsed();
  }
  /**
   * Define if the sidebar is collapsed or not
   */
  isCollapsed$: Observable<boolean>;
}
