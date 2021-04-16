import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Routage
import {AppRoutingModule} from './app-routing.module';

// Composants
import {AppComponent} from './app.component';
import {GenerationsComponent} from './components/generations/generations.component';
import {PokemonsComponent} from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

// locale: France
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
