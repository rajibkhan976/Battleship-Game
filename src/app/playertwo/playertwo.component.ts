import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playertwo',
  templateUrl: './playertwo.component.html',
  styleUrls: ['./playertwo.component.css']
})
export class PlayertwoComponent implements OnInit {

  battleShipsPlayerTwo: any = {
    'Carrier':   5,
    'Frigate':   4,
    'Cruiser':   3,
    'Submarine': 3,
    'Destroyer': 2
  };
  playerTwo: string = 'Player Two Setup';
  typeOfBattleShipPlayerTwo: string;
  sizeOfBattleShipPlayerTwo: number;
  instructionTwo: string;
  playerTwoCarrierPosition: string[] = [];
  playerTwoFrigatePosition: string[] = [];
  playerTwoCruiserPosition: string[] = [];
  playerTwoSubmarinePosition: string[] = [];
  playerTwoDestroyerPosition: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  getShipType () {
    for (var shipType in this.battleShipsPlayerTwo) {
      if (this.typeOfBattleShipPlayerTwo === shipType) {
        this.sizeOfBattleShipPlayerTwo = this.battleShipsPlayerTwo[shipType];
        this.instructionTwo = 'You can position your ' + this.typeOfBattleShipPlayerTwo + ' in ' + this.sizeOfBattleShipPlayerTwo + ' different cells in the grid.';
      }
    }
  }

  positionShip (cellValue: string) {
    if (this.typeOfBattleShipPlayerTwo === 'Carrier') {
      for (var carrierPositionCounter = 0; carrierPositionCounter < 1; carrierPositionCounter++) {
        if (this.playerTwoCarrierPosition.length < 5 && !this.playerTwoCarrierPosition.includes(cellValue)) {
          this.playerTwoCarrierPosition.push(cellValue);
        } else {
          break;
        }
      }
    }
    if (this.typeOfBattleShipPlayerTwo === 'Frigate') {
      for (var frigatePositionCounter = 0; frigatePositionCounter < 1; frigatePositionCounter++) {
        if (this.playerTwoFrigatePosition.length < 4 && !this.playerTwoFrigatePosition.includes(cellValue)) {
          this.playerTwoFrigatePosition.push(cellValue);
        } else {
          break;
        }
      }
    }
    if (this.typeOfBattleShipPlayerTwo === 'Cruiser') {
      for (var cruiserPositionCounter = 0; cruiserPositionCounter < 1; cruiserPositionCounter++) {
        if (this.playerTwoCruiserPosition.length < 3 && !this.playerTwoCruiserPosition.includes(cellValue)) {
          this.playerTwoCruiserPosition.push(cellValue);
        } else {
          break;
        }
      }
    }
    if (this.typeOfBattleShipPlayerTwo === 'Submarine') {
      for (var submarinePositionCounter = 0; submarinePositionCounter < 1; submarinePositionCounter++) {
        if (this.playerTwoSubmarinePosition.length < 3 && !this.playerTwoSubmarinePosition.includes(cellValue)) {
          this.playerTwoSubmarinePosition.push(cellValue);
        } else {
          break;
        }
      }
    }
    if (this.typeOfBattleShipPlayerTwo === 'Destroyer') {
      for (var destroyerPositionCounter = 0; destroyerPositionCounter < 1; destroyerPositionCounter++) {
        if (this.playerTwoDestroyerPosition.length < 2 && !this.playerTwoDestroyerPosition.includes(cellValue)) {
          this.playerTwoDestroyerPosition.push(cellValue);
        } else {
          break;
        }
      }
    }
  }

  setClass (cellPosition: string) {
    if (this.playerTwoCarrierPosition.includes(cellPosition)) {
      return 'Carrier';
    } else if (this.playerTwoFrigatePosition.includes(cellPosition)) {
      return 'Frigate';
    } else if (this.playerTwoCruiserPosition.includes(cellPosition)) {
      return 'Cruiser';
    } else if (this.playerTwoSubmarinePosition.includes(cellPosition)) {
      return 'Submarine';
    } else if (this.playerTwoDestroyerPosition.includes(cellPosition)) {
      return 'Destroyer';
    } else {
      return 'Noclass';
    }
  }

  ngOnInit() {
  }

}
