import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";
import { Player } from "./player";
import { Match } from "../summoner-history/match";
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
export class SummonerOnegameHistoryService {
  private apiurl: string;
  baseApiUrl = environment.baseApiUrl;
  baseDragonUrl = environment.baseDragonUrl;

  constructor(private http: HttpClient) { }

  getdata(match: Match): Observable<Player[]> {
    let gameids = match.matches.map(ig => {
      return ig.gameId.toString();
    });

    return this.http.get<Player[]>('http://localhost:8000/api/player/', {
      params: {
        gameids: gameids
      }
    })

    // return forkJoin(...observableGroup);
  }
}
