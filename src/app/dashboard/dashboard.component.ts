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
  @Input() playerOneMiss: string[];
  @Input() playerTwoHits: string[];
  @Input() playerTwoMiss: string[];
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
    } else if (this.playerOneMiss.includes(playerOneGridStrikeValue)) {
      return 'miss';
    } else {
      return 'noClass';
    }
  }

  playerTwoStrikeSignal (playerTwoGridStrikeValue: string) {
    if (this.playerTwoHits.includes(playerTwoGridStrikeValue)) {
      return 'hit';
    } else if (this.playerTwoMiss.includes(playerTwoGridStrikeValue)) {
      return 'miss';
    } else {
      return 'noClass';
    }
  }

  ngOnInit() {
  }

}
