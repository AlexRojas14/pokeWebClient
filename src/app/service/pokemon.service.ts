import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiConfig } from 'src/assets/api-config';
import { PokeDto } from '../dtos/poke.dto';
import { ServiceResult } from '../dtos/service-result.dto';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = ApiConfig.BaseUrl;


  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    return this.http.get<ServiceResult<PokeDto>>(`${this.baseUrl}?name=${name}`);
  }
}
