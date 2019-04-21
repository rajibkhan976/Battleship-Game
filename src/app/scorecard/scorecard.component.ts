import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  @Input() firstPlayerCarrierPosition: string[];
  @Input() firstPlayerFrigatePosition: string[];
  @Input() firstPlayerCruiserPosition: string[];
  @Input() firstPlayerSubmarinePosition: string[];
  @Input() firstPlayerDestroyerPosition: string[];

  @Input() secondPlayerCarrierPosition: string[];
  @Input() secondPlayerFrigatePosition: string[];
  @Input() secondPlayerCruiserPosition: string[];
  @Input() secondPlayerSubmarinePosition: string[];
  @Input() secondPlayerDestroyerPosition: string[];

  firstPlayerHit: string[] = [];
  secondPlayerHit: string[] = [];

  constructor() { }

  checkFirstPlayerShipPosition (secondPlayerStrike: string) {
    if (this.firstPlayerCarrierPosition.includes(secondPlayerStrike)) {
      this.firstPlayerHit.push(secondPlayerStrike);
    } else if (this.firstPlayerFrigatePosition.includes(secondPlayerStrike)) {
      this.firstPlayerHit.push(secondPlayerStrike);
    } else if (this.firstPlayerCruiserPosition.includes(secondPlayerStrike)) {
      this.firstPlayerHit.push(secondPlayerStrike);
    } else if (this.firstPlayerSubmarinePosition.includes(secondPlayerStrike)) {
      this.firstPlayerHit.push(secondPlayerStrike);
    } else if (this.firstPlayerDestroyerPosition.includes(secondPlayerStrike)) {
      this.firstPlayerHit.push(secondPlayerStrike);
    } else {

    }
    console.log(this.firstPlayerHit);
  }

  checkSecondPlayerShipPosition (firstPlayerStrike: string) {
    if (this.secondPlayerCarrierPosition.includes(firstPlayerStrike)) {
      this.secondPlayerHit.push(firstPlayerStrike);
    } else if (this.secondPlayerFrigatePosition.includes(firstPlayerStrike)) {
      this.secondPlayerHit.push(firstPlayerStrike);
    } else if (this.secondPlayerCruiserPosition.includes(firstPlayerStrike)) {
      this.secondPlayerHit.push(firstPlayerStrike);
    } else if (this.secondPlayerSubmarinePosition.includes(firstPlayerStrike)) {
      this.secondPlayerHit.push(firstPlayerStrike);
    } else if (this.secondPlayerDestroyerPosition.includes(firstPlayerStrike)) {
      this.secondPlayerHit.push(firstPlayerStrike);
    } else {

    }
    console.log(this.secondPlayerHit);
  }

  ngOnInit() {
  }

}
