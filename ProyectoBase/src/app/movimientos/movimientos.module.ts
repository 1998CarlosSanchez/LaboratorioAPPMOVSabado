import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovimientosPage } from './movimientos.page';
import { ModalMovPage } from '../modal-mov/modal-mov.page';
import { ModalMovPageModule } from '../modal-mov/modal-mov.module';

const routes: Routes = [
  {
    path: '',
    component: MovimientosPage
  }
];

@NgModule({
  entryComponents: [
    ModalMovPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalMovPageModule
  ],
  exports: [
  ],
  declarations: [MovimientosPage]
})
export class MovimientosPageModule {}