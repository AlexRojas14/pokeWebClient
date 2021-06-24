import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiConfig } from 'src/assets/api-config';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = ApiConfig.BaseUrl;


  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    return this.http.get(`${this.baseUrl}?name=${name}`);
  }
}
