import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export abstract class Page {

  constructor(private _debugElement: DebugElement) {}

  public abstract updatePage();

  protected getHtmlElement(css: string, debugElement: DebugElement = this._debugElement): HTMLElement {
    const el: DebugElement = debugElement.query(By.css(css));
    if (el != null) {
      return el.nativeElement;
    }
  }

}
