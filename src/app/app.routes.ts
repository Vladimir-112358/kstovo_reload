import { Routes } from '@angular/router';
import {AuthWindowComponent} from "./components/auth-window/auth-window.component";
import {MainComponent} from "./components/main/main.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

export const routes: Routes = [
  {path: "login", component: AuthWindowComponent},
  {path: "main", component: MainComponent},
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
];
