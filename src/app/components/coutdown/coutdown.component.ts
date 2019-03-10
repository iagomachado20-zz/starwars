import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-coutdown',
  templateUrl: './coutdown.component.html',
  styleUrls: ['./coutdown.component.scss']
})
export class CoutdownComponent implements OnInit {

  count: number = 120;

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
    this.startCount();
  }

  startCount() {

    this.game.setStatusTimeGame(true);

    let loop = setInterval(() => {
      this.count -= 1;
      if (this.count == 0) {
        clearInterval(loop);
        this.game.setStatusTimeGame(false);
      }

    }, 1000);

  }

}
