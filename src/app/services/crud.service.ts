import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CrudService {

  constructor(
    private http: Http
  ) {}

  public _getHeaders() {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return options;

  }

  private handleError(error: Response) {
    return Observable.throw(error.json() || 'Server error');
    
  }

  public getData(url: string) {

    return this.http.get(url, this._getHeaders())
    .pipe(
      map( res => res.json())
    )

  }

}
