import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayeroneComponent } from './playerone/playerone.component';
import { PlayertwoComponent } from './playertwo/playertwo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'playerone', component: PlayeroneComponent},
  {path: 'playertwo', component: PlayertwoComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
