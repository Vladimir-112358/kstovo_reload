import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ContentComponent} from "./content/content.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(public authService: AuthService, private router: Router) {
  }


}
