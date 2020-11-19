import { Injectable } from '@angular/core';
import { Dice } from './dice';

@Injectable({
  providedIn: 'root'
})
export class DiceTrayService {
  private diceTray: Dice[] = [];

  constructor() { }

  addDice(dice: Dice): void {
    this.diceTray.push(dice);
  }

  clearDice(): void {

  }

  rollDice(): Dice[];
}
