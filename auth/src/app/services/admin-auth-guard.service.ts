import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor( 
     private route: ActivatedRoute,
    private authService: AuthService) { }
}
