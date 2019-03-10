import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  @Input() page = {
    prev: '',
    next: ''
  };

  constructor() { }

  ngOnChanges() {}

  setPage(url) {
    
  }

}
