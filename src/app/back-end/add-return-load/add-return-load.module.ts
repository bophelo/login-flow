import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddReturnLoadPage } from './add-return-load.page';

const routes: Routes = [
  {
    path: '',
    component: AddReturnLoadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddReturnLoadPage]
})
export class AddReturnLoadPageModule {}
