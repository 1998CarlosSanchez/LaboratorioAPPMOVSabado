import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-mov',
  templateUrl: './modal-mov.page.html',
  styleUrls: ['./modal-mov.page.scss'],
})
export class ModalMovPage implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(private Fbuilder: FormBuilder,
              private modalCtrl: ModalController,
              private alertController: AlertController) {
                this.addForm = this.Fbuilder.group({
                  descripcion: ['', Validators.required],
                  cantidad: ['', Validators.compose([Validators.required])], /*.compose fue para poner mas de una validacion*/
                  tipo: ['', Validators.required],
                  cuenta: ['', Validators.required],
                  etiqueta: ['', Validators.required]
                });
              }

  public cuentas;
  public etiquetas;
  ngOnInit() {
    this.cuentas = [
      {Cantidad: 1555.00, Nombre: 'Crédito Banorte'},
      {Cantidad: 1.50, Nombre: 'Débito Banregio'},
      {Cantidad: -1555.00, Nombre: 'Crédito BBVA'}
    ];

    this.etiquetas = [
      {Nombre: 'Alimento'},
      {Nombre: 'Deuda'},
      {Nombre: 'Educación'},
      {Nombre: 'Entretenimiento'},
      {Nombre: 'Hogar'},
      {Nombre: 'Ingresos'},
      {Nombre: 'Regalos'},
      {Nombre: 'Ropa y calzado'},
      {Nombre: 'Transporte'},
      {Nombre: 'Viajes'}
    ];
  }

  enviar( datos ) {
    console.log(datos);
    this.modalCtrl.dismiss({
      descripcion: datos.descripcion,
      cantidad: datos.cantidad,
      tipo: datos.tipo,
      cuenta: datos.cuenta,
      etiqueta: datos.etiqueta
    });
  }

  salirAdd() {
    this.modalCtrl.dismiss();
  }

}