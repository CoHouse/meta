/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PreFooterComponent } from './components/shared/pre-footer/pre-footer.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/public/home/home.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { VideosComponent } from './components/public/videos/videos.component';
import { AskComponent } from './components/public/ask/ask.component';
import { ChallengeComponent } from './components/public/challenge/challenge.component';
import { ForumComponent } from './components/public/forum/forum.component';
import { RegisterComponent } from './components/public/register/register.component';
import { PostComponent } from './components/public/post/post.component';
import { OursystemComponent } from './components/public/oursystem/oursystem.component';
import { VideoComponent } from './components/public/video/video.component';

import { TrainingComponent } from './components/private/training/training.component';
import { AccountComponent } from './components/private/account/account.component';
import { InquestComponent } from './components/private/inquest/inquest.component';
import { GymsComponent } from './components/private/gyms/gyms.component';

import { ContentManagerComponent } from './components/admin/content-manager/content-manager.component';
import { NutritionistManagerComponent } from './components/admin/nutritionist-manager/nutritionist-manager.component';
import { PlannerManagerComponent } from './components/admin/planner-manager/planner-manager.component';

/* Services */
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { NutritionistGuardService } from './services/nutritionist-guard.service';
import { PlannerGuardService } from './services/planner-guard.service';
import { ChangerGuardService } from './services/changer-guard.service';
import { AccountService } from './services/account.service';
import { HomeService } from './services/home.service';
import { BlogService } from './services/blog.service';
import { PostService } from './services/post.service';
import { VideoService } from './services/video.service';
/* Dudas, Foro */

/* Pipes */
import { KeysPipe } from './pipes/keys.pipe';

/* Routes */
import { APP_ROUTING } from './app-routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PreFooterComponent,
    TrainingComponent,
    BlogComponent,
    VideosComponent,
    AskComponent,
    ChallengeComponent,
    ForumComponent,
    AccountComponent,
    InquestComponent,
    RegisterComponent,
    ContentManagerComponent,
    GymsComponent,
    PostComponent,
    KeysPipe,
    OursystemComponent,
    NutritionistManagerComponent,
    PlannerManagerComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminGuardService,
    NutritionistGuardService,
    PlannerGuardService,
    ChangerGuardService,
    AccountService,
    HomeService,
    BlogService,
    PostService,
    VideoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
