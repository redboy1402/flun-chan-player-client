import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameManager {
  public gameName: string = '';
  public gameId: number = -1;
  public myName: string = '';

  constructor() {
  }

}
