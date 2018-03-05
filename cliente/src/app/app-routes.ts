import { RouterModule, Routes } from '@angular/router';

/* Public Components */
import { HomeComponent } from './components/public/home/home.component';
import { AskComponent } from './components/public/ask/ask.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { ChallengeComponent } from './components/public/challenge/challenge.component';
import { VideosComponent } from './components/public/videos/videos.component';
import { ForumComponent } from './components/public/forum/forum.component';
import { RegisterComponent } from './components/public/register/register.component';
import { PostComponent } from './components/public/post/post.component';
import { OursystemComponent } from './components/public/oursystem/oursystem.component';

/* Private Components */
import { TrainingComponent } from './components/private/training/training.component';
import { InquestComponent } from './components/private/inquest/inquest.component';
import { AccountComponent } from './components/private/account/account.component';
import { ContentManagerComponent } from './components/admin/content-manager/content-manager.component';

/* Guards */
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { NutritionistGuardService } from './services/nutritionist-guard.service';
import { PlannerGuardService } from './services/planner-guard.service';
import { ChangerGuardService } from './services/changer-guard.service';

/* Rutas */
const APP_ROUTES: Routes = [
  { path: 'ask', component: AskComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cuenta', component: AccountComponent },
  { path: 'post/:_id', component: PostComponent },
  { path: 'our-system', component: OursystemComponent },

  { path: 'training', component: TrainingComponent, canActivate: [ AuthGuardService, ChangerGuardService ] },
  { path: 'inquest', component: InquestComponent, canActivate: [ AuthGuardService ] },
  { path: 'content-manager', component: ContentManagerComponent, canActivate: [ AuthGuardService, AdminGuardService ] },
  { path: '**',  component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, { useHash: true } );
