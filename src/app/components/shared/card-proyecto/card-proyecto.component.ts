import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-proyecto',
  templateUrl: './card-proyecto.component.html',
  styleUrls: ['./card-proyecto.component.css'],
})
export class CardProyectoComponent implements OnInit {
  porc: string = '';
  @Input() imagen: string = '../../../../assets/image 122.png';
  @Input() titulo: string = 'PROYECTO';
  @Input() descripcion: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet dis dui amet sem ut. In ultrices ....';
  @Input() recaudado: number = 0;
  @Input() objetivo: number = 1;
  @Input() opcion: string = '';

  constructor() {}
  tipoProyecto() {
    if (this.opcion == 'DONAR') {
      return true;
    } else {
      return false;
    }
  }
  porcentaje() {
    return Math.floor((this.recaudado * 100) / this.objetivo);
  }

  ngOnInit(): void {
    this.porc = `${this.porcentaje()}%`;
    console.log(this.porc);
  }
}
