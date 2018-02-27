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
import { TrainingComponent } from './components/public/training/training.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { VideosComponent } from './components/public/videos/videos.component';
import { AskComponent } from './components/public/ask/ask.component';
import { ChallengeComponent } from './components/public/challenge/challenge.component';
import { ForumComponent } from './components/public/forum/forum.component';
import { RegisterComponent } from './components/public/register/register.component';
import { AccountComponent } from './components/private/account/account.component';
import { InquestComponent } from './components/private/inquest/inquest.component';
import { ContentManagerComponent } from './components/admin/content-manager/content-manager.component';
import { GymsComponent } from './components/private/gyms/gyms.component';
import { PostComponent } from './components/public/post/post.component';

/* Services */
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminService } from './services/admin.service';
import { AccountService } from './services/account.service';
import { HomeService } from './services/home.service';

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
    KeysPipe
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
    AdminService,
    AccountService,
    HomeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
