import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  @Input() page = { prev: '', next: '' };
  @Output() sendPage = new EventEmitter<string>();

  constructor() { }

  ngOnChanges() {
    console.log(this.page);
  }

  setPage(url: string): void {
    
    this.sendPage.emit(url);

  }

}
