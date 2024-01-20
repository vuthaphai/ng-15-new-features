import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardsService } from './shared/services/auth-guards.service';
import { AuthService } from './auth/auth.service';
import { authGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', 
  // canActivate: [AuthGuardsService], 
  canActivate: [authGuard], 
  component: HomeComponent},
  {path: 'auth', loadChildren:() => import('./auth/auth.module').then(m =>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
