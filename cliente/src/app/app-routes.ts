import { RouterModule, Routes } from '@angular/router';

/* Public Components */
import { HomeComponent } from './components/public/home/home.component';
import { OursystemComponent } from './components/public/oursystem/oursystem.component';
import { BlogComponent } from './components/public/blog/blog.component';
  import { PostComponent } from './components/public/blog/post.component';
import { VideosComponent } from './components/public/videos/videos.component';
  import { VideoComponent } from './components/public/videos/video.component';
import { AskComponent } from './components/public/ask/ask.component';
import { ForumComponent } from './components/public/forum/forum.component';
  import { ForumcatComponent } from './components/public/forum/forumcat.component';
    import { TopicComponent } from './components/public/forum/topic.component';
import { ChallengeComponent } from './components/public/challenge/challenge.component';
  import { DetailchallengeComponent } from './components/public/challenge/detailchallenge.component';
import { JoinComponent } from './components/public/join/join.component';

import { RegisterComponent } from './components/public/register/register.component';

/* Private Components */
import { TrainingComponent } from './components/private/training/training.component';
import { InquestComponent } from './components/private/inquest/inquest.component';
import { YouchangerComponent } from './components/private/inquest/youchanger.component';
import { AccountComponent } from './components/private/account/account.component';
import { ContentManagerComponent } from './components/admin/content-manager/content-manager.component';
import { PlannerManagerComponent } from './components/admin/planner-manager/planner-manager.component';
import { PmdetailComponent } from './components/admin/planner-manager/pmdetail.component';
import { NutritionistManagerComponent } from './components/admin/nutritionist-manager/nutritionist-manager.component';

/* Guards */
import { AuthGuardService } from './services/auth-guard.service';
import { ChangerGuardService } from './services/changer-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { PlannerGuardService } from './services/planner-guard.service';
import { NutritionistGuardService } from './services/nutritionist-guard.service';

/* Rutas */
const APP_ROUTES: Routes = [
  { path: 'ask', component: AskComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:category', component: BlogComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'detail-challenge/:_id', component: DetailchallengeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'videos/:category', component: VideosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'forum/category/:category', component: ForumcatComponent },
  { path: 'forum/category/:category/topic/:topic', component: TopicComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'cuenta', component: AccountComponent },
  { path: 'post/:_id', component: PostComponent },
  { path: 'video/:_id', component: VideoComponent },
  { path: 'our-system', component: OursystemComponent },
  { path: 'join', component: JoinComponent },

  { path: 'training', component: TrainingComponent, canActivate: [ ChangerGuardService ] },
  { path: 'inquest/:_id', component: InquestComponent, canActivate: [ ChangerGuardService ] },
  { path: 'youchanger/:_id', component: YouchangerComponent, canActivate: [ ChangerGuardService ] },

  { path: 'content-manager', component: ContentManagerComponent, canActivate: [ AdminGuardService ] },
  { path: 'planner', component: PlannerManagerComponent, canActivate: [ PlannerGuardService ] },
  { path: 'plan-detail/:_id', component: PmdetailComponent, canActivate: [ PlannerGuardService ] },
  { path: 'nutritionist', component: NutritionistManagerComponent, canActivate: [ NutritionistGuardService ] },

  { path: '**',  component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, { useHash: true } );
