import { Injectable } from '@angular/core';
import { Dice } from './dice';
import { RollResult } from './roll-response';

@Injectable({
  providedIn: 'root'
})
export class DiceTrayService {
  public diceTray: Dice[] = [];

  constructor() { }


  // addDice(dice: Dice): Dice[] {
  //   this.diceTray.push(dice);
  //   return this.diceTray;
  // }

  // clearDice(): void {
  //   this.diceTray = [];
  // }

  rollDice(): RollResult[] {
    return [{ result: 1, diceName: '4' }];
  }
}
