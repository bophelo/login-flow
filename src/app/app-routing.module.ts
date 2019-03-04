import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './front-end/login/login.module#LoginPageModule' },
  { path: 'reset', loadChildren: './front-end/reset/reset.module#ResetPageModule' },
  {
    path: 'users',
    canActivate: [AuthGuardService],
    loadChildren: './back-end/users/user-routing.module#UserRoutingModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
