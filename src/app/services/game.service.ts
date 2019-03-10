import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GameService {

  isStarted$ = new Subject<boolean>();

  constructor() { }

  setStatusTimeGame(statusGame: boolean) {

    this.isStarted$.next(statusGame);

  }

}
