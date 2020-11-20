import { RollResult } from './roll-result';

export interface Dice {
    maxResult: number;
}

export interface TrayDice {
    dice: Dice;
    rollResult: RollResult;
}
