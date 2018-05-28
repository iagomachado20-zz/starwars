import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { People } from '../../models';


@Injectable()
export class UtilservicesService {
  
  constructor(private http: Http) { }

  private _getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  loadPeople(urlPeople): Observable<People> { 

    return this.http.get(urlPeople, this._getHeaders())
    .map((response: Response) => <People>response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
    
  }
  
  loadDetails(specie, homeworld, films) {

    return Observable.forkJoin(
      this.http.get(specie, this._getHeaders()).map((res:Response) => res.json()),
      this.http.get(homeworld, this._getHeaders()).map((res:Response) => res.json()),
      this.http.get(films, this._getHeaders()).map((res:Response) => res.json())
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
    
    let users = JSON.parse(localStorage.getItem('users'));

    return users;
  }

}
 