import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { LOLUserData } from "./lolinterface";
import { RankInfo } from "./rankinfo";
import { environment } from "src/environments/environment.prod";

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, x-requested-with",
    "Content-Type": "application/json"
  }),
};


@Injectable()
export class SummonerService {
  private apiurl: string;
  baseApiUrl = environment.baseApiUrl;
  baseDragonUrl = environment.baseDragonUrl;

  constructor(private http: HttpClient) { }

  getdata(name: string): Observable<LOLUserData> {
    return this.http.get<LOLUserData>('http://localhost:8000/api/profile/', {
      params: new HttpParams().set('name', name),
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }).pipe(map(res => res))
  }

  getRankdata(summonerID: string): Observable<RankInfo> {
    return this.http.get<RankInfo>('http://localhost:8000/api/ranked/', {
      params: new HttpParams().set('summonerID', summonerID),
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }).pipe(map(res => res))
  }
}
