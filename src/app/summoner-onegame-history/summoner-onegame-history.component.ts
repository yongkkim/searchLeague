import { Component, OnInit, Input } from "@angular/core";
import { SummonerOnegameHistoryService } from "./summoner-onegame-history.service";
import { SummonerHistoryService } from "../summoner-history/summoner-history.service";
import { Match } from "../summoner-history/match";
import { Champ } from "../summoner-history/champ";
import { Player } from "./player";

@Component({
  selector: "app-summoner-onegame-history",
  templateUrl: "./summoner-onegame-history.component.html",
  styleUrls: ["./summoner-onegame-history.component.css"]
})
export class SummonerOnegameHistoryComponent implements OnInit {
  private champimages: Champ;
  private images: string[] = [];
  private url: string =
    "http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/";
  private typed: boolean = false;
  private players: Player[];
  @Input("info") private matchinfo: Match;

  constructor(
    private summonerHistoryService: SummonerHistoryService,
    private summonerOneGameHistoryService: SummonerOnegameHistoryService
  ) { }

  ngOnInit() {
    if (this.matchinfo != null) {
      this.getGameHistory(this.matchinfo);
    }
  }

  getGameHistory(matches: Match): void {
    this.summonerOneGameHistoryService.getdata(matches).subscribe(play => {
      this.players = play;
      this.players.forEach(player => {
        player.participants.forEach(igs => {
          let imgurl =
            this.url + this.matchinfo.champlist.get(igs.championId.toString());
          this.images.push(imgurl);
        });
      });
    });
  }
}
