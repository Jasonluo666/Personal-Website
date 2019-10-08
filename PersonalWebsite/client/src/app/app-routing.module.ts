import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { WorkComponent } from './component/work/work.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { SkillComponent } from './component/skill/skill.component';


const routes: Routes = [
  {path: 'home', component: AboutComponent},
  {path: 'skill', component: SkillComponent},
  {path: 'portfolio', component: WorkComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', redirectTo: '#/home', pathMatch: 'full'},
  {path: 'skill', redirectTo: '#/skill', pathMatch: 'full'},
  {path: 'portfolio', redirectTo: '#/portfolio', pathMatch: 'full'},
  {path: 'blog', redirectTo: '#/blog', pathMatch: 'full'},
  {path: 'contact', redirectTo: '#/contact', pathMatch: 'full'},
  {path: 'footer', redirectTo: '#/footer', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
