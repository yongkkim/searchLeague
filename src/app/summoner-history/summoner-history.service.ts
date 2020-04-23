import { Injectable } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { Match } from "./match";
import { Champ } from "./champ";
import { Spell } from "./spell";
import { Item } from "./item";
import { environment } from "src/environments/environment.prod";

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class SummonerHistoryService {
  private apiurl: string;
  baseApiUrl = environment.baseApiUrl;
  baseDragonUrl = environment.baseDragonUrl;
  constructor(private http: HttpClient) { }

  getdata(id: string): Observable<Match> {
    return this.http.get<Match>('http://localhost:8000/api/data/', {
      params: new HttpParams().set('id', id),
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }).pipe(map(res => res))
  }
  getimage(): Observable<Champ> {
    return this.http.get<Champ>('http://localhost:8000/api/image/', httpOptions).pipe(map(res => res));
  }
  getspell(): Observable<Spell> {
    return this.http.get<Spell>('http://localhost:8000/api/spell/', httpOptions).pipe(map(res => res));
  }
  getitem(): Observable<Item> {
    return this.http.get<Item>('http://localhost:8000/api/item/', httpOptions).pipe(map(res => res));
  }
}
