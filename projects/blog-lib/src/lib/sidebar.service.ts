import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  /**
   * Private BehaviorSubject to define if the sidebar is collapsed or not.
   * Collapsed sidebar = true
   * Not collapsed sidebar = false
   */
  _isCollapsed = new BehaviorSubject<boolean>(false);

  /**
   * Private variable stocking the default value of isCollapsed Subject.
   */
  _isCollapsedDefault = false;

  /**
   * Collapsed the sidebar if it's not (and open the sidebar if it's collapsed).
   * Emit the new value through isCollapsed() function.
   */
  public toggleCollapsed(): void {
    this._isCollapsed.next(!this._isCollapsed.getValue());
  }

  /**
   * Return if the sidear is collapsed as an observable.
   */
  public isCollapsed(): Observable<boolean> {
    return this._isCollapsed.asObservable();
  }

  /**
   * Collapsed the sidebar.
   * Emit the new value through isCollapsed() function.
   */
  public collapse(): void {
    this._isCollapsed.next(true);
  }

  /**
   * Open the sidebar.
   * Emit the new value through isCollapsed() function.
   */
  public open(): void {
    this._isCollapsed.next(false);
  }

  /**
   * Set the current value of isCollapsed as the default one.
   */
  public setCurrentAsDefault() {
    this._isCollapsedDefault = this._isCollapsed.getValue();
  }

  /**
   * Use the default value as the new one.
   * Emit the new value through isCollapsed() function.
   */
  public useDefault() {
    if (
      this._isCollapsedDefault !== undefined &&
      this._isCollapsedDefault !== null
    ) {
      this._isCollapsed.next(this._isCollapsedDefault);
    }
  }
}
