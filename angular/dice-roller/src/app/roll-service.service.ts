import { Injectable, EventEmitter } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { RollResult } from './roll-result';
import { TrayDice } from './dice';
import { LogLevel } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class RollServiceService {
  private hubConnection: signalR.HubConnection;
  signalReceived = new EventEmitter<TrayDice[]>();
  constructor() {
    this.buildConnection();
    this.startConnection();
  }



  private buildConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:44383/rollHub', {
        skipNegotiation: false,
        transport: signalR.HttpTransportType.WebSockets,
        logger: new SignlarLogger(),
        logMessageContent: true
      })
      .build();
  }

  private startConnection = () => {
    console.log(this.hubConnection);
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection Started...');
        this.registerSignalEvents();
      })
      .catch(err => {
        console.log('Error while strting connection: ' + err);

        // if you get error try to start connection again after 3 seconds.
        setTimeout(() => {
          this.startConnection();
        }, 3000);
      });
  }


  private registerSignalEvents(): void {
    this.hubConnection.on('RollResult', (data: any) => {
      const trayDiceArray: TrayDice[] =
        data.map(
          (rawData) => {
            return {
              dice: { maxResult: rawData.diceName },
              rollResult: { result: rawData.result }
            } as TrayDice;
          });

      this.signalReceived.emit(trayDiceArray);
    });
  }

  public rollDice(trayDice: TrayDice[]): void {
    const diceToRoll = trayDice.map(d => d.dice);
    this.hubConnection.invoke(
      'Roll', diceToRoll)
      .catch(
        (err) => console.error(err.toString()));
  }
}
class SignlarLogger {
  log(logLevel: LogLevel, message: string): void {
    console.log(message);
  }
}
