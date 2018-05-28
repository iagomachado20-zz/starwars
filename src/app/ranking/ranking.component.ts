import { Component, OnInit } from '@angular/core';
import { UtilservicesService } from '../services/utilservices.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  list:any = [];

  constructor(
    private service: UtilservicesService
  ) { }

  ngOnInit() {
    this.list = this.service.loadingUsers();
  }

}
