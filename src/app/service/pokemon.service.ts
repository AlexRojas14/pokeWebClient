import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiConfig } from 'src/assets/api-config';
import { PokeDto } from '../dtos/poke.dto';
import { ServiceResult } from '../dtos/service-result.dto';
import { map, catchError } from 'rxjs/operators';
import { ReportFileResponse } from '../dtos/ReportFileResponse.dto';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = ApiConfig.BaseUrl;


  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    return this.http.get<ServiceResult<PokeDto>>(`${this.baseUrl}?name=${name}`);
  }

  downloadDetail(id: number) {
    let url = `${this.baseUrl}DownloadDetail?id=${id}`;
    
    let result = this.http.get(url, {
            responseType: 'blob',
            observe: 'response'
          })
          .pipe(
            map((res: any) => {
              let fileResponse: ReportFileResponse = {
                ContentType: res.headers.get('Content-Type'),
                FileContent: new Blob([res.body], { type: "text/plain" })
              }

              return fileResponse;
            })
          );

    return result;
  }
}
