import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddStandardLoadPage } from './add-standard-load.page';

const routes: Routes = [
  {
    path: '',
    component: AddStandardLoadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddStandardLoadPage]
})
export class AddStandardLoadPageModule {}
