import { Route } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

export const AUTH_ROUTE: Route[] = [
    {path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
]