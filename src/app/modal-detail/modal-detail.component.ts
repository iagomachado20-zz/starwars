import { Component, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';

import { People } from '../../models';
import { UtilservicesService } from '../services/utilservices.service';

@Component({
  selector: 'modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})
export class ModalDetailComponent implements OnChanges {

  @Input() open:boolean = false;
  @Input() selected:any;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private service: UtilservicesService) { }

  closeModal() {
    this.close.emit(false);
  }

  ngOnChanges(changes) {
    
  }

}
