import { Component } from '@angular/core';
import { PokeDto } from '../dtos/poke.dto';

import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  public inputSearch: string = "";
  public poke: PokeDto[] = [];

  constructor(private pokemonService: PokemonService) { }

  btnSearchClick() {
    this.pokemonService.getPokemon(this.inputSearch)
        .subscribe(result => {
          if (result.executedSuccesfully) {
            this.poke = result.data;
          } else {
            //Mostrar error
          }
          
          console.log(this.poke);
        }, err => {

        });
  }

}
