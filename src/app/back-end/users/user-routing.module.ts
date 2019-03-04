import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: 'src/app/back-end/users/home/home.module#HomePageModule' },
  /*{ path: 'add-standard-load', loadChildren: './add-standard-load/add-standard-load.module#AddStandardLoadPageModule' },
  { path: 'add-return-load', loadChildren: './add-return-load/add-return-load.module#AddReturnLoadPageModule' },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
