import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playerone',
  templateUrl: './playerone.component.html',
  styleUrls: ['./playerone.component.css']
})
export class PlayeroneComponent implements OnInit {

  const battleShips: any = {
    'Carrier': 5,
    'Frigate': 4,
    'Cruiser': 3,
    'Submarine': 3,
    'Destroyer': 2
  };
  typeOfBattleShip: string;
  sizeOfBattleShip: number;
  clickCounter: number = 0;
  instructionOne: string;
  positionFlag: boolean = false;

  constructor() { }

  positionShip (cellValue: string) {
    if (this.positionFlag) {
      this.clickCounter++;
      alert(this.clickCounter);
    }
  }

  getShipType () {
    for (var shipType in this.battleShips) {
      if (this.typeOfBattleShip === shipType) {
        this.sizeOfBattleShip = this.battleShips[shipType];
        this.instructionOne = 'You can position your ' + this.typeOfBattleShip + ' in ' + this.sizeOfBattleShip + ' different cells in the grid.';
        this.positionFlag = true;
      }
    }
  }

  ngOnInit() {
  }

}
