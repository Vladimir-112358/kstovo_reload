import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false
  onLogin(){
      this.isLoggedIn = true
  }

  onLogout(){
    this.isLoggedIn = false
  }

  isAuthorized(): boolean{
    return this.isLoggedIn
  }
  constructor() { }
}
