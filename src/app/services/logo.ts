import { HttpHeaders } from '@angular/common/http';
import { Response, RequestOptions, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class Logo {


  public logo: any = {};

  constructor(// private ds: DataStorageService,
    private http: Http,

  ) {
    this.http.get('./assets/img/logo.txt').subscribe(data => {
      this.logo = {
        id: '',
        width: 105,
        height: 59,
        image: data.text(),
      };
    });

  }
}




