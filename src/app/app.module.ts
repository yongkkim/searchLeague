import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SummonerComponent } from './summoner/summoner.component';
import { SummonerHistoryComponent } from './summoner-history/summoner-history.component';
import { SummonerOnegameHistoryComponent } from './summoner-onegame-history/summoner-onegame-history.component';
import { ChampionStatsComponent } from './champion-stats/champion-stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: SummonerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SummonerComponent,
    SummonerHistoryComponent,
    SummonerOnegameHistoryComponent,
    ChampionStatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
