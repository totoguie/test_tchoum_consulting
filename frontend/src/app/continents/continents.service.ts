import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Continents } from './continents';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Continents[]>("http://localhost:3000/continents/");
  }
}
