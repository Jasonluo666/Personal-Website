import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { WorkComponent } from './component/work/work.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { SkillComponent } from './component/skill/skill.component';
import { FaceDetectionComponent } from './component/face-detection/face-detection.component';
import { ChatroomComponent } from './component/chatroom/chatroom.component';
import { FaceAIComponent } from './component/face-ai/face-ai.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    NavigationComponent,
    SkillComponent,
    FaceDetectionComponent,
    ChatroomComponent,
    FaceAIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
