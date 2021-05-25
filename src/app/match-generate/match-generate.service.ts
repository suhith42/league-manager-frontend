import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApirequestModel} from "../models/apirequest.model";

@Injectable({
  providedIn: 'root'
})
export class MatchGenerateService {

  _url = "api/randomMatch";
  constructor(private http?: HttpClient) { }

  getApi(){
    return this.http.get<ApirequestModel>(this._url).toPromise();
  }

  getClubApi(clubId: number){
    return this.http.get<ApirequestModel>(`/api/club/${clubId}`).toPromise();
  }
}
