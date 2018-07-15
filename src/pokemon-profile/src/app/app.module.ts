import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PokemonProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
          { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
        { path: 'pokemon', component: PokemonProfileComponent },
          { path: '**', component: AppComponent },
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
