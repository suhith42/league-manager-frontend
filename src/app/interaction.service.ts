import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {FootBallMatch} from "./models/footballmatch.model";
import {FootballClub} from "./models/footballclub.model";

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _randomMatchSource = new Subject<FootBallMatch>();
  randomMatch$ = this._randomMatchSource.asObservable();

  private _updatedTeam1 = new Subject<FootballClub>();
  updatedTeam1$ = this._updatedTeam1.asObservable();

  private _updatedTeam2 = new Subject<FootballClub>();
  updatedTeam2$ = this._updatedTeam2.asObservable();

  constructor() { }

  sendMatch(match: FootBallMatch){
    this._randomMatchSource.next(match);
  }

  sendTeam1(team1: FootballClub){
    this._updatedTeam1.next(team1);
  }

  sendTeam2(team2: FootballClub){
    this._updatedTeam2.next(team2);
  }
}
