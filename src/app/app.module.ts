import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChallengeOneComponent } from './features/challenge-one/challenge-one.component';
import { ChallengeTwoComponent } from './features/challenge-two/challenge-two.component';
import { ChallengeThreeComponent } from './features/challenge-three/challenge-three.component';
import { ChallengeFourComponent } from './features/challenge-four/challenge-four.component';
import { ChallengeOneUtilityComponent } from './features/challenge-one-utility/challenge-one-utility.component';
import { ChallengeTwoUtilityComponent } from './features/challenge-two-utility/challenge-two-utility.component';
import { ChallengeThreeUtilityComponent } from './features/challenge-three-utility/challenge-three-utility.component';
import { DisplayfoodPipe } from './shared/displayfood.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeOneComponent,
    ChallengeTwoComponent,
    ChallengeThreeComponent,
    ChallengeFourComponent,
    ChallengeOneUtilityComponent,
    ChallengeTwoUtilityComponent,
    ChallengeThreeUtilityComponent,
    DisplayfoodPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
