import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { WorkComponent } from './component/work/work.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { SkillComponent } from './component/skill/skill.component';
import { FaceDetectionComponent } from './component/face-detection/face-detection.component';
import { FaceAIComponent } from './component/face-ai/face-ai.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: AboutComponent},
  {path: 'skill', component: SkillComponent},
  {path: 'portfolio', component: WorkComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},

  {path: 'portfolio/face-detection', component: FaceDetectionComponent},
  {path: 'portfolio/face-ai', component: FaceAIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
