import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { People } from '../../models';
import { CrudService } from './crud.service';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class UtilservicesService {
  
  constructor(
    private crud: CrudService,
    private http: Http
  ) {}
  
  loadDetails(specie, homeworld, films) {

    return Observable.forkJoin(
      this.crud.getData(specie),
      this.crud.getData(homeworld),
      this.crud.getData(films)
    );
    
  }

  formatUrl(url:string) {
    let id = url.match(/([0-9])+/g);
    return id[0];
  }

  // Salva a sessão do usuário
  saveStorage(user:object) {

    let array = this.loadingUsers();
    array.push(user);
    localStorage.setItem('users', JSON.stringify(array));

  }

  // Carrega os usuários que já jogaram
  loadingUsers() {
    
    return JSON.parse(localStorage.getItem('users')) || [];

  }

}
 