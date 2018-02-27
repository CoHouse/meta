import { RouterModule, Routes } from '@angular/router';

/* Public Components */
import { HomeComponent } from './components/public/home/home.component';
import { AskComponent } from './components/public/ask/ask.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { ChallengeComponent } from './components/public/challenge/challenge.component';
import { TrainingComponent } from './components/public/training/training.component';
import { VideosComponent } from './components/public/videos/videos.component';
import { ForumComponent } from './components/public/forum/forum.component';
import { RegisterComponent } from './components/public/register/register.component';
import { PostComponent } from './components/public/post/post.component';

/* Private Components */
import { InquestComponent } from './components/private/inquest/inquest.component';
import { AccountComponent } from './components/private/account/account.component';
import { ContentManagerComponent } from './components/admin/content-manager/content-manager.component';

/* AuthGuard */
import { AuthGuardService } from './services/auth-guard.service';
import { AdminService } from './services/admin.service';

/* Rutas */
const APP_ROUTES: Routes = [
  { path: 'ask', component: AskComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cuenta', component: AccountComponent },
  { path: 'post', component: PostComponent },
  { path: 'inquest', component: InquestComponent, canActivate: [ AuthGuardService ] },
  { path: 'content-manager', component: ContentManagerComponent, canActivate: [ AuthGuardService, AdminService ] },
  { path: '**',  component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, { useHash: true } );
