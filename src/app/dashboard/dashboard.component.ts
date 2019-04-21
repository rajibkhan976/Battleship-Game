import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  playerOne: string = 'Player One Grid';
  playerTwo: string = 'Player Two Grid';

  constructor() { }

  playerOneStrike (gridOneCellValue: string) {
    alert(gridOneCellValue);
  }

  playerTwoStrike (gridTwoCellValue: string) {
    alert(gridTwoCellValue);
  }

  playerOneStrikeSignal (playerOneGridStrikeValue: string) {
    if (playerOneGridStrikeValue === '1A') {
      return 'hit';
    } else {
      return 'miss';
    }
  }

  playerTwoStrikeSignal (playerTwoGridStrikeValue: string) {
    if (playerTwoGridStrikeValue === '1A') {
      return 'hit';
    } else {
      return 'miss';
    }
  }

  ngOnInit() {
  }

}
