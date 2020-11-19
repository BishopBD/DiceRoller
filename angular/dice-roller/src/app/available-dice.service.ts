import { Injectable } from '@angular/core';
import { Dice } from './dice';

@Injectable({
  providedIn: 'root'
})
export class AvailableDiceService {

  private DICE: Dice[] = [
    { maxResult: 4 },
    { maxResult: 6 },
    { maxResult: 8 },
    { maxResult: 10 },
    { maxResult: 12 },
    { maxResult: 20 }
  ];

  constructor() { }

  getDice(): Dice[] {
    return this.DICE;
  }
}
