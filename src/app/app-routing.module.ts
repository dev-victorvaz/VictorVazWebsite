import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { Title } from '@angular/platform-browser';
import { SkillsComponent } from './views/skills/skills.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'skills', title: 'Skills', component: SkillsComponent},
  {path: 'portfolio', title: 'Portfolio', component:PortfolioComponent},
  {path: 'contact', title: 'Contact', component:ContactComponent},
  {path: '**', title: 'Page not found', component: PageNotFoundComponent},
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  
  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Victor Vaz - ${title}`);
    }
    
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
