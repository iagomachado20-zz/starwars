import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UtilservicesService } from '../services/utilservices.service';
import { User } from '../../models';


@Component({
  selector: 'app-modal-final',
  templateUrl: './modal-final.component.html',
  styleUrls: ['./modal-final.component.scss']
})
export class ModalFinalComponent {

  @Input() open:boolean = false;
  @Input() points:number;
  @Output() close: EventEmitter<any> = new EventEmitter();

  user = new User();
  isValidFormSubmitted = false;

  ngOnInit() {}

  constructor(
    private service: UtilservicesService,
    private router: Router
  ) {}


  // Salvando Formulário

  saveUser(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    
    this.user = form.value;
    this.user.point = this.points;
    this.service.saveStorage(this.user);
    this.closeModal();
    this.router.navigateByUrl('/ranking');
  }

  closeModal() {
    this.close.emit(false);
  }

}
