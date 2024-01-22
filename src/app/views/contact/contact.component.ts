import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderTitleService } from 'src/app/services/header-title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  title = 'Contact';

  constructor(
    private headerTitle: HeaderTitleService,
    private titleService: Title
  ) {
    this.headerTitle.setHeaderTitle(this.title);
    this.titleService.setTitle(`Victor Vaz - ${this.title}`);
  }

}
