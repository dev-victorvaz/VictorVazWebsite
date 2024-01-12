import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GitHubComponent implements OnInit {
  constructor(
    private pageTitle: PageTitleService
  ) { }

  ngOnInit(): void {
    this.pageTitle.setPageTitle("GitHub");
  }

}
