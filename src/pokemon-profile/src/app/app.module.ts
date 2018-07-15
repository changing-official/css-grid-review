import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { RouterModule } from '@angular/router';
import { PokemonProfileBreadcrumbComponent } from './pokemon-profile/pokemon-profile-breadcrumb/pokemon-profile-breadcrumb.component';
import { PokemonProfileNomeComponent } from './pokemon-profile/pokemon-profile-nome/pokemon-profile-nome.component';
import { PokemonProfileAbilitiesComponent } from './pokemon-profile/pokemon-profile-abilities/pokemon-profile-abilities.component';
import { PokemonProfileTypeComponent } from './pokemon-profile/pokemon-profile-type/pokemon-profile-type.component';
import { PokemonProfileImageComponent } from './pokemon-profile/pokemon-profile-image/pokemon-profile-image.component';
import { PokemonProfileDescriptionComponent } from './pokemon-profile/pokemon-profile-description/pokemon-profile-description.component';
import { PokemonProfileTypeEffectivenessComponent } from './pokemon-profile/pokemon-profile-type-effectiveness/pokemon-profile-type-effectiveness.component';
import { PokemonProfileStatsComponent } from './pokemon-profile/pokemon-profile-stats/pokemon-profile-stats.component';
import { PokemonProfileEvolutionComponent } from './pokemon-profile/pokemon-profile-evolution/pokemon-profile-evolution.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonProfileComponent,
    PokemonProfileBreadcrumbComponent,
    PokemonProfileNomeComponent,
    PokemonProfileAbilitiesComponent,
    PokemonProfileTypeComponent,
    PokemonProfileImageComponent,
    PokemonProfileDescriptionComponent,
    PokemonProfileTypeEffectivenessComponent,
    PokemonProfileStatsComponent,
    PokemonProfileEvolutionComponent
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
