import { Component } from '@angular/core';

import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  public inputSearch: string = "";

  constructor(private pokemonService: PokemonService) { }

  btnSearchClick() {
    this.pokemonService.getPokemon(this.inputSearch)
        .subscribe(data => {
          console.log(data);
        }, err => {

        });
  }

}
