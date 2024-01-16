import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(public authService: AuthService, private router: Router) {
  }

  exit(){
    //this.authService.onLogout()
    this.router.navigate([""]).then(r => console.log(r))
  }
}
