import {Component, OnInit} from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';
import {FormSearchPokemon} from '../../models/form-search-pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any;
  count = 0;
  public selectedPokemon: any;
  faOptinMonster = faOptinMonster;
  formSearchPokemon = new FormSearchPokemon('');

  constructor(private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonsService.getPokemons();
    this.count = this.pokemonsService.countPokemons();
  }

  selectPokemon = (name: any) => this.selectedPokemon = name;
  search = (pokemonName: any) => this.pokemons = this.pokemonsService.searchPokemon(pokemonName);
  cancelSearch = () => {
    this.pokemons = this.pokemonsService.getPokemons();
    this.formSearchPokemon.setName('');
  }
}
