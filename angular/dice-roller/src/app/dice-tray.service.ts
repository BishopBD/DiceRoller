import { Injectable } from '@angular/core';
import { TrayDice } from './dice';
import { RollServiceService } from './roll-service.service';

@Injectable({
  providedIn: 'root'
})
export class DiceTrayService {
  public diceTray: TrayDice[] = [];

  constructor(public rollService: RollServiceService) {

    this.rollService.signalReceived.subscribe((signal: TrayDice[]) => {
      this.diceTray = signal;
    });
  }

  // rollDice(): void {
  //   this.diceTray = this.diceTray.map(
  //     (trayDice) => {
  //       return {
  //         dice: trayDice.dice, rollResult: { result: (Math.floor(trayDice.dice.maxResult * Math.random()) + 1) }
  //       };
  //     });
  // }
  rollDice(): void {
    this.rollService.rollDice(this.diceTray);
  }
}
