import { Component, OnInit } from '@angular/core';
import { LOLUserData } from '../summoner/lolinterface';
import { SummonerService } from '../summoner/summoner.service';
import { ChampionStatsService } from './champion-stats.service';
import { TopTwoTier } from './toptwotier';
import { Champ } from '../summoner-history/champ';
import { SummonerHistoryService } from '../summoner-history/summoner-history.service';
import { interval, observable, Observable } from '../../../node_modules/rxjs';
import { TopTwoTiers } from './toptwotiers';

@Component({
  selector: 'app-champion-stats',
  templateUrl: './champion-stats.component.html',
  styleUrls: ['./champion-stats.component.css']
})
export class ChampionStatsComponent implements OnInit {
  private heroes: LOLUserData;
  private url: string = 'http://ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/';
  private profileimg: string = "";
  private challenger: TopTwoTier;
  private temp: TopTwoTiers[] = Array<TopTwoTiers>();
  private master: TopTwoTier;
  private players: LOLUserData[] = Array<LOLUserData>();
  private keyss = new Map();
  private champimages: Champ;
  private count: number = 0;


  constructor(private summonerService: SummonerService, private championstatsservice: ChampionStatsService, private summonerHistoryService: SummonerHistoryService) { }

  ngOnInit() {
    // this.championstatsservice.getChallenger().subscribe(challdata => {
    //   this.challenger = challdata;
    //   this.count50();
    //       this.championstatsservice.getdata(this.challenger).subscribe(challs => {
    //       this.championstatsservice.getchamp(challs, this.count).subscribe(matches =>{
    //         this.summonerHistoryService.getimage().subscribe(champsinfo => {
    //           for(let c of Object.values(champsinfo.data))
    //           {
    //             let values = new Map();
    //             values.set("frequency", 0);
    //             values.set("name", c.name);
    //             values.set("image", c.image.full);
    //             this.keyss.set(c.key, values);
    //           }

    //             matches.forEach(m =>{
    //             m.matches.forEach(ms =>{
    //             let temp = this.keyss.get((ms.champion).toString());
    //             temp.set("frequency", temp.get("frequency") + 1);
    //             this.keyss.set((ms.champion).toString(),  temp);
    //             });
    //           });
    //           //console.log(this.keyss);
    //         });
    //       });
    //     });
    //   });
    /*this.championstatsservice.getMaster().subscribe(mastdata => {
      this.master = mastdata;
    });*/
  }
  count50() {
    this.challenger.entries.forEach(ff => {
      if (this.count <= 40) {
        this.temp.push(ff);
        this.count++;
      }
      else {
        this.challenger.entries = this.temp;
        return;
      }
    });
  }
}


