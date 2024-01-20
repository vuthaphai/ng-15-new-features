import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){}

  OnLogin(){
    localStorage.setItem('token', 'vp');
    this.router.navigate(['home'])
  }

}
