import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { Title } from '@angular/platform-browser';
import { ExpertiseComponent } from './views/expertise/expertise.component';

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'expertise', title: 'Expertise', component: ExpertiseComponent},
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
