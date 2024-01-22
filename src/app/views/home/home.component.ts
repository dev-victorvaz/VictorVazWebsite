import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderTitleService } from 'src/app/services/header-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Home';

  constructor(
    private headerTitle: HeaderTitleService,
    private titleService: Title
  ) {
    this.headerTitle.setHeaderTitle(this.title);
    this.titleService.setTitle(`Victor Vaz - ${this.title}`);
  }
}
