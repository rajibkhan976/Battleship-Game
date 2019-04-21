import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayeroneComponent } from './playerone/playerone.component';
import { PlayertwoComponent } from './playertwo/playertwo.component';
import { ScorecardComponent } from './scorecard/scorecard.component';

const routes: Routes = [
  {path: 'playerone', component: PlayeroneComponent},
  {path: 'playertwo', component: PlayertwoComponent},
  {path: 'play', component: ScorecardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
