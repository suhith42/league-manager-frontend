import { Component, OnInit } from '@angular/core';
import {FootBallMatch} from "../models/footballmatch.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatchGenerateService} from "./match-generate.service";
import {TableService} from "../table/table.service";
import {ApirequestModel} from "../models/apirequest.model";
import {FootballClub} from "../models/footballclub.model";
import {TableComponent} from "../table/table.component";
import {ResultsComponent} from "../results/results.component";
import {InteractionService} from "../interaction.service";

@Component({
  selector: 'app-match-generate',
  templateUrl: './match-generate.component.html',
  styleUrls: ['./match-generate.component.css']
})
export class MatchGenerateComponent implements OnInit {

  dataSource;
  randomMatch: FootBallMatch;
  constructor(private _service: MatchGenerateService, private _interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  async getRandomMatch(){
    this.dataSource = await this._service.getApi();
    this.randomMatch = <FootBallMatch>this.dataSource.body;

    if (this.randomMatch == null){
      alert("Add two or more clubs to generate a match!");
    }else {
      console.log(this.randomMatch.team1,this.randomMatch.team1Score," vs ",this.randomMatch.team2Score, this.randomMatch.team2);

      this._interactionService.sendMatch(this.randomMatch);
      await this.updateTeamStats();
    }




  }

  async updateTeamStats(){
    let team1Data: any =  await this._service.getClubApi(this.randomMatch.team1Id);
    let team2Data: any = await this._service.getClubApi(this.randomMatch.team2Id);

    let team1 = <FootballClub> team1Data.body;
    let team2 = <FootballClub> team2Data.body;
    this._interactionService.sendTeam1(team1);
    this._interactionService.sendTeam2(team2);

  }

}
