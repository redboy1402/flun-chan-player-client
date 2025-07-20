import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameManager {
  public gameName: WritableSignal<string>;
  public gameId: WritableSignal<number>;

  constructor() {
    this.gameName = signal('');
    this.gameId = signal(0);
  }

}
