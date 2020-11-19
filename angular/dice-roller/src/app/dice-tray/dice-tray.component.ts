import { Component, OnInit } from '@angular/core';
import { AvailableDiceService } from '../available-dice.service';
import { Dice } from '../dice';

@Component({
  selector: 'app-dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.css']
})
export class DiceTrayComponent implements OnInit {

  constructor(public availableDiceService: AvailableDiceService) { }

  ngOnInit(): void {
  }

  addDiceToTray(dice: Dice) {

  }

}
