import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { on } from 'cluster';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() { 

    let headers= new Headers();
    let token=localStorage.getItem('token');
    headers.append('Authprization', 'Bearer'+token);

    let option=new RequestOptions({headers:headers});


    return this.http.get('/api/orders')
      .map(response => response.json());
  }



}
