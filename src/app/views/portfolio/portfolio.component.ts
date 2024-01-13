import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor(
    private pageTitle: PageTitleService
  ) { }

  ngOnInit(): void {
    this.pageTitle.setPageTitle("Portfolio");
  }

}
