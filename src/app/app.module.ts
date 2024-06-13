import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { DiceComponent } from './dice/dice.component';
import { PlayerComponent } from './player/player.component';
import { PlayerTokenComponent } from './player-token/player-token.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DiceComponent,
    PlayerComponent,
    PlayerTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
