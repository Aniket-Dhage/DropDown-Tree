import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { Country } from '../model/country';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpclient: HttpClient) { }

  url: string="http://localhost:9090/api/"

  getCountry():Observable<Country[]>
  {
    return this.httpclient.get<Country[]>(this.url+"getCountry/");
  }

}
