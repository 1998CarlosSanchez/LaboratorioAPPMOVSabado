import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMovPage } from '../modal-mov/modal-mov.page';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  public movimientox;
  constructor( private modalControl: ModalController) { }

  ngOnInit() {
    this.movimientox = [
      {
        descripcion: '7-eleven',
        cantidad: 18,
        tipo: 2, /*1. Ingreso 2. Gasto*/
        cuenta: {
          nombre: 'Credito Banorte',
          id: 1
        },
        etiqueta: {
          descripcion: 'Comida',
          id: 1
        },
        fecha: '2019-11-08'

      },
    ];
  }

  async  AgregarMovimiento() {
    const modal = await this.modalControl.create({
      component: ModalMovPage,
      componentProps: {
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log('Retorno de modal:', data);
      const newCount = this.movimientox.push({
        descripcion: data.descripcion,
        cantidad: data.cantidad,
        tipo: data.tipo,
        cuenta: {
          nombre: data.cuenta,
          id: 27,
        },
        etiqueta: {
          descripcion: data.etiqueta,
          id: 27
        }
      });
    }
  }

}