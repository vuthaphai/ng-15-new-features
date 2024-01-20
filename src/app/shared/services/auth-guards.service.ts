import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) { }
 
  
  canActivate() {
    const currentUser = this.authService.currentUser()
    console.log('currentUser: ', currentUser);
    if(!currentUser){
      this.router.navigate(['auth'])
      return false
    }
    return true
    
  }
}
