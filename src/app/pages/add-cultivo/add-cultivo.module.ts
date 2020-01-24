import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


/* Si todo funciona estas Dos Lineas tambien se deben Borrar */
import * as firebase from 'firebase';
import {firebaseConfig} from '../../../../src/environments/environment';

import { IonicModule } from '@ionic/angular';

import { AddCultivoPage } from './add-cultivo.page';

const routes: Routes = [
  {
    path: '',
    component: AddCultivoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddCultivoPage]
})
export class AddCultivoPageModule {}
