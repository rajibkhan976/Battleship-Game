import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  playerOne: string = 'Player One Grid';
  playerTwo: string = 'Player Two Grid';
  firstPlayerStrike: string;
  secondPlayerStrike: string;
  @Input() playerOneHits: string[];
  @Input() playerTwoHits: string[];
  @Output() firstPlayerStrikeCheck = new EventEmitter<string>();
  @Output() secondPlayerStrikeCheck = new EventEmitter<string>();

  constructor() { }

  playerOneStrike (gridOneCellValue: string) {
    this.firstPlayerStrike = gridOneCellValue;
    this.firstPlayerStrikeCheck.emit(this.firstPlayerStrike);
  }

  playerTwoStrike (gridTwoCellValue: string) {
    this.secondPlayerStrike = gridTwoCellValue;
    this.secondPlayerStrikeCheck.emit(this.secondPlayerStrike);
  }

  playerOneStrikeSignal (playerOneGridStrikeValue: string) {
    if (this.playerOneHits.includes(playerOneGridStrikeValue)) {
      return 'hit';
    } else {
      return 'miss';
    }
  }

  playerTwoStrikeSignal (playerTwoGridStrikeValue: string) {
    if (this.playerTwoHits.includes(playerTwoGridStrikeValue)) {
      return 'hit';
    } else {
      return 'miss';
    }
  }

  ngOnInit() {
  }

}
