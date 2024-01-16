import { Routes } from '@angular/router';
import {AuthWindowComponent} from "./components/auth-window/auth-window.component";
import {MainComponent} from "./components/main/main.component";

export const routes: Routes = [
  {path: "", component: AuthWindowComponent},
  {path: "main", component: MainComponent},
  {path: "**", component: MainComponent}
];
