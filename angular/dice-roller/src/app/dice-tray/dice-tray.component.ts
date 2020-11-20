import { Component, OnInit } from '@angular/core';
import { AvailableDiceService } from '../available-dice.service';
import { Dice, TrayDice } from '../dice';
import { DiceTrayService } from '../dice-tray.service';
import { RollServiceService } from '../roll-service.service';

@Component({
  selector: 'app-dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.css']
})
export class DiceTrayComponent implements OnInit {

  dice: Dice;

  constructor(
    public diceTrayService: DiceTrayService,
    public availableDiceService: AvailableDiceService) { }

  ngOnInit(): void {
  }

  addDice(dice: Dice): void {
    this.diceTrayService.diceTray.push({ dice, rollResult: null });
  }

  clearDice(): void {
    this.diceTrayService.diceTray = [];
  }

  rollDice(): void {
    // const rollResult = this.diceTrayService.rollDice();
    this.diceTrayService.rollDice();
  }
}
