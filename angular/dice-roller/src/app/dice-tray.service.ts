import { Injectable } from '@angular/core';
import { TrayDice } from './dice';

@Injectable({
  providedIn: 'root'
})
export class DiceTrayService {
  public diceTray: TrayDice[] = [];

  constructor() { }

  rollDice(): void {
    this.diceTray = this.diceTray.map(
      (trayDice) => {
        return {
          dice: trayDice.dice, rollResult: { result: (Math.floor(trayDice.dice.maxResult * Math.random()) + 1) }
        };
      });
  }
}
