import { Component, Inject } from '@angular/core';

import { Meta } from '@angular/platform-browser';
import { AgeService } from './services/age.service';
import { CollegeStatusService } from './services/college-status.service';
import { ThemeService } from './services/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta,
    private ageService: AgeService,
    private collegeStatusService: CollegeStatusService,
    private themeService: ThemeService
    ) {
      const localStorage = document.defaultView?.localStorage;

      this.meta.addTags([
        {
          name: 'description', content: $localize`I am ${this.ageService.getAge()} years old, ${this.collegeStatusService.getCollegeStatus()} and
          I'm very happy to be part of technology area.`},
        { name: 'author', content: 'Victor Vaz' },
        { name: 'keywords', content: 'Angular, SQL, DevOPS, Java, Developer, Programmer' },
        { content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg', itemprop: 'image' },
        { property: 'og:title', content: 'Victor Vaz' },
        {
          property: 'og:description', content: $localize`I am ${this.ageService.getAge()} years old, ${this.collegeStatusService.getCollegeStatus()} and
          I'm very happy to be part of technology area.`},
        { property: 'og:image', content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg' }
      ]);

      if(localStorage) {
        this.loadThemePreference();
      }
  }

  loadThemePreference(): boolean {
    const theme = localStorage.getItem("theme");

    if (theme == null) {
      return false;
    }

    this.themeService.toggleTheme(theme);

    return true;
  }

}
