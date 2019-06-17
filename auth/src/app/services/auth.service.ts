import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response=>{
        console.log(response.json());
        let result= response.json();
        if ( result && result.token)
        {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 

    return tokenNotExpired();

    // let jwthelper=new JwtHelper();
    // let token= localStorage.getItem('token');
    // let expireDate=Jwthelper.getTokenExpirationDate();
    // let isexp=jwthelper.isTokenExpired();


    return false;
  }
}

