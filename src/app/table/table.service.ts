import { FootballClub } from './../models/footballclub.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ApirequestModel} from "../models/apirequest.model";




@Injectable({
  providedIn: 'root'
})
export class TableService{


  private _url ="/api/clubs";

  constructor(private http?: HttpClient){

  }

  getApi(){
    return this.http.get<ApirequestModel>(this._url).toPromise();
  }



  



}
