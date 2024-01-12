import { Component } from '@angular/core';
import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent {
  constructor(
    private pageTitle: PageTitleService
  ) { }

  getPageTitle(): string {
    return this.pageTitle.getPageTitle();
  }
}
