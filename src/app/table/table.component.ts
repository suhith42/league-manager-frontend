import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, Sort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FootballClub } from '../models/footballclub.model';
import { TableService } from './table.service';
import {log} from "util";
import {InteractionService} from "../interaction.service";
import {Subject} from "rxjs";




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private clubList: FootballClub[];
  tableData;
  dataList;

  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'matches', 'wins', 'draws', 'defeats', 'scoredGoals','concededGoals', 'goalDifference', 'points'];

  sortColumns = [
    {value: "points", title: "Points"},
    {value: "wins", title: "Wins"},
    {value: "scoredGoals", title: "Goals"}
  ]


  constructor(private _service?: TableService, private _interactionService?: InteractionService) {

    this.getClubs();

  }


  ngOnInit(){
    this.getUpdatedTeam();
    // this.tableData.sort = this.sort;
    // this.changeSortedColumn();

  }

  selectedColumn = 'points';
  changeSortedColumn() {

    const sortState: Sort = {active: this.selectedColumn, direction: 'desc'};
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }

  async getClubs(){
    this.dataList = await this._service.getApi();
    this.clubList = <FootballClub[]> this.dataList.body;
    this.tableData = new MatTableDataSource(this.clubList);
    this.tableData.sort = this.sort;
  }

  getUpdatedTeam(){

    this._interactionService.updatedTeam1$
      .subscribe( team1 => this.updateClub(team1));
    this._interactionService.updatedTeam2$
      .subscribe( team2 => this.updateClub(team2));


  }

  updateClub(club: FootballClub){
    let objIndex = this.clubList.findIndex((obj => obj.clubId == club.clubId));
    this.clubList[objIndex] = club;
    this.tableData = new MatTableDataSource(this.clubList);
    this.tableData.sort = this.sort;
  }
}
