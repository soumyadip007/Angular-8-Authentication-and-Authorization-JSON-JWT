import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

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
    let jwthelper=new JwtHelper();
    let token= localStorage.getItem('token');
    let expireDate=Jwthelper.getTokenExpirationDate();
    let isexp=jwthelper.isTokenExpired();


    return false;
  }
}

