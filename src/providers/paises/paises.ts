import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PaisesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisesProvider {

  private BASE_URL_API = 'https://restcountries.eu/rest/v2/';

  constructor(public http: HttpClient) {
    console.log('Hello PaisesProvider Provider');
  }

  getPaisesByRegion(region:string){
    return this.http.get(this.BASE_URL_API + 'region/' + region);
}

}
