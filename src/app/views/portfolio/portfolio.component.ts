import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderTitleService } from 'src/app/services/header-title.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  title = 'Portfolio'

  constructor(
    private headerTitle: HeaderTitleService,
    private titleService: Title
  ) {
    this.headerTitle.setHeaderTitle($localize`${this.title}`);
    this.titleService.setTitle($localize`Victor Vaz - ${this.title}`);
  }

}
