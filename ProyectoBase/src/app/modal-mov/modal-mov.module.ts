import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { Routes, RouterModule } from '@angular/router';*/

import { IonicModule } from '@ionic/angular';

import { ModalMovPage } from './modal-mov.page';
/*
const routes: Routes = [       Borramos la ruta porque si no lo hacemos se abrira el modan en vez de la pagina de movimientos.
  {
    path: '',
    component: ModalMovPage
  }
];
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule                  /*Es necesario importar  esto para el FormGroup*/
/*  RouterModule.forChild(routes)*/
  ],
  declarations: [ModalMovPage],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModalMovPageModule {}