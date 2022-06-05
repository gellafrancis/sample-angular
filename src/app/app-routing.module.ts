import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChallengeOneComponent } from './features/challenge-one/challenge-one.component';
import { ChallengeTwoComponent } from './features/challenge-two/challenge-two.component';
import { ChallengeThreeComponent } from './features/challenge-three/challenge-three.component';
import { ChallengeFourComponent } from './features/challenge-four/challenge-four.component';

const routes: Routes = [
  { path: '',   redirectTo: '/first-challenge', pathMatch: 'full' },
  { path: 'first-challenge', component: ChallengeOneComponent },
  { path: 'second-challenge', component: ChallengeTwoComponent },
  { path: 'third-challenge', component: ChallengeThreeComponent },
  { path: 'fourth-challenge', component: ChallengeFourComponent },
  { path: '**',  redirectTo: '/first-challenge', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
