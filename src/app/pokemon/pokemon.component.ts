import { Component } from '@angular/core';

import { PokemonService } from '../service/pokemon.service';

import { PokeDto } from '../dtos/poke.dto';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  public inputSearch: string = "";
  public pokes: PokeDto[] = [];
  public errorInfo: boolean = false;
  public errorMessages: string[] = [];
  public isLoading: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  btnSearchClick() {
    if (this.inputSearch == "") {
      this.pokes = [];
      this.errorInfo = false;
      return;
    }

    this.isLoading = true;

    this.pokemonService.getPokemon(this.inputSearch)
        .subscribe(result => {
          this.isLoading = false;

          if (result.executedSuccesfully) {
            this.pokes = result.data;
            this.errorInfo = false;
          } else {
            this.errorMessages = result.messages;
            this.pokes = [];
            this.errorInfo = true;
          }
        }, err => {
          this.isLoading = false;
          this.errorMessages = ["Se ha Producido un Error. Contacte con su Administrador"];
          this.pokes = [];
          this.errorInfo = true;
        });
  }

  isEnter(e: any) {
    if (e.keyCode === 13 && !e.shiftKey) {
      this.btnSearchClick();
    }
  }

}
