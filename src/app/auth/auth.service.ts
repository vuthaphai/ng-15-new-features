import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  currentUser(): string | null {
     return localStorage.getItem('token')
  }
}
