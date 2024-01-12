import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor() { }

  private pageTitle: string = '';

  setPageTitle(title:string):void {
    this.pageTitle = title;
  }

  getPageTitle(): string {
    return this.pageTitle;
  }

}
