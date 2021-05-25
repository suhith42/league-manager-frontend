import { FootBallMatch } from './../models/footballmatch.model';
import { Injectable } from '@angular/core';
import {ApirequestModel} from "../models/apirequest.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _url ="/api/matches";

  constructor(private http?: HttpClient) { }

  getApi(){
    return this.http.get<ApirequestModel>(this._url).toPromise();
  }

}
