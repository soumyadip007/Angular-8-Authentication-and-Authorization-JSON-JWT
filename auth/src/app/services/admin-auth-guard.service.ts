import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { setFlagsFromString } from 'v8';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor( 
     private route: ActivatedRoute,
    private authService: AuthService) { }

    CanActivate(){
      if(this.authService.currentUser.admin) return true;

      this.route.navigate(['/no-access']);
      return false;

    }
}
