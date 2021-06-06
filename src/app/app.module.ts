import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourtLocationComponent } from './components/court-location/court-location.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourtLocationComponent,
    PlayerComponent,
    TeamsComponent,
    HomePageComponent,
    TeamPageComponent,
    PlayerListComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
        },
      {
        path: 'locations',
        component: CourtLocationComponent
      },
      {
        path: 'teams/:teamname',
        component: TeamPageComponent
      },
      {
        path: 'teams',
        component: TeamsComponent
      },
      {
        path: 'players',
        component: PlayerComponent
      },
      {
        path: 'players/:teamid',
        component: PlayerListComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
