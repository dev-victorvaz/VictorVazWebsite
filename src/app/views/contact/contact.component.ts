import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(
    private pageTitle: PageTitleService
  ) { }

  ngOnInit(): void {
    this.pageTitle.setPageTitle("Contact");
  }

  value:string = 'Clear me'

}
