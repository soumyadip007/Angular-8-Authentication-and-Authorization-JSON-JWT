import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard  {

  constructor( 
     private route: Router,
    private authService: AuthService) { }

    CanActivate(){
      let user=this.authService.currentUser.admin;
      if(user && user.admin) return true;

      this.route.navigate(['/no-access']);
      return false;

    }
}
