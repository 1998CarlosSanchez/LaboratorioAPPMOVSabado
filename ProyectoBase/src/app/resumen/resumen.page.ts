import { Component, OnInit, ViewChild, ElementRef , AfterViewInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss']
})
export class ResumenPage implements AfterViewInit {
  @ViewChild('doughnutCanvas', {static: false})
  // tslint:disable-next-line: max-line-length
  doughnutReference: ElementRef; /*{read: ElementRef} accessing the property not on Component initialisation but after the View https://github.com/angular/angular/issues/30291*/

  private doughnutChart: Chart;

  ngAfterViewInit() {

    this.doughnutChart = new Chart(this.doughnutReference.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Deuda', 'Hogar', 'Alimento', 'Entretenimiento', 'Transporte',
         'Educacion', 'Regalos'​, ​'Viajes'​, ​'Ingresos'​, ​'Ropa y Calazado'],

        datasets: [
          {
            label: '# de Porcentaje',
            data: [​10​,​10​,​10​,​10​,​10​,​10​,​10​,​10​,​10​,​10​],

            backgroundColor: [
              ​'#FBA7A7'​,
              '#F4CFA3'​,
              ​'#FDF6A9'​,
              '#EDFCA9'​,
              '#C3ECAC'​,
              '#A9F2D5'​,
              '#BCFBF0'​,​
              ​'#E0DEE1'​,​
              '#AFE6F8'​,​
              '#D2C6F4'
            ],

            hoverBackgroundColor: ['#FF0101'​, ​'#FA8B04'​, ​'#FDF103'​, ​'#BEFE01'​, ​'#54D304'​,
            '#13EA97'​,​ ​'#4BE4E1'​, ​'#888789'​, '#046BF3'​, ​'#8253F6'​]
          }
        ]
      }
    });
  }
}