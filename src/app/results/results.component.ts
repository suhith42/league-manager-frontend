import { MatTableDataSource } from '@angular/material/table';
import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { ResultsService } from './results.service';
import { MatSort, Sort } from '@angular/material/sort';
import {FootballClub} from "../models/footballclub.model";
import {FootBallMatch} from "../models/footballmatch.model";
import {InteractionService} from "../interaction.service";
import { fadeOut, blub} from '../animations/template.animations';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  animations: [fadeOut, blub],
})
export class ResultsComponent implements OnInit {


  tableData = new MatTableDataSource;
  displayedColumns: string[] = ['date', 'team1', 'scores', 'team2' , ]
  private dataSource;
  private _matchList: FootBallMatch[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _service: ResultsService, private _interactionService: InteractionService) {

    this.getMatches();
   }

  ngOnInit(): void {
    this._interactionService.randomMatch$
      .subscribe(
        match =>{
          this._matchList.push(match);
          this.tableData = new MatTableDataSource(this._matchList);
        }
      );

  }

  ngAfterViewInit() {
    this.tableData.sort = this.sort;
  }

  filterByDate(userInput){
    this.tableData.filter = userInput.trim().toLowerCase();
  }

  sortTable(){
    const sortState: Sort = {active: 'date', direction: 'asc'};
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
    this.tableData.sort = this.sort;
  }

  async getMatches(){
    this.dataSource = await this._service.getApi();
    this._matchList = <FootBallMatch[]> this.dataSource.body;
    this.tableData = new MatTableDataSource(this._matchList);
    this.tableData.sort = this.sort;
  }





}
