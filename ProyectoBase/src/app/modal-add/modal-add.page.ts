import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.page.html',
  styleUrls: ['./modal-add.page.scss'],
})
export class ModalAddPage implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(private Fbuilder: FormBuilder,
              private modalCtrl: ModalController,
              private alertController: AlertController) {
                this.addForm = this.Fbuilder.group({
                  nombre: ['', Validators.required],
                  cantidad: ['', Validators.compose([Validators.required])] /*.compose fue para poner mas de una validacion*/
                });
              }

  ngOnInit() {
  }

  enviar( datos ) {
    console.log(datos);
    this.modalCtrl.dismiss({
      Nombre: datos.nombre,
      Cantidad: datos.cantidad
    });
  }

  salirAdd() {
    this.modalCtrl.dismiss();
  }

}