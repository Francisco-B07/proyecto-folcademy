import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-proyecto',
  templateUrl: './card-proyecto.component.html',
  styleUrls: ['./card-proyecto.component.css'],
})
export class CardProyectoComponent implements OnInit {
  @Input() titulo: string = 'PROYECTO';
  @Input() imagen: string = '../../../../assets/imagen-no-encontrada.jpg';
  @Input() opcion: string = 'Donar';
  @Input() descripcion: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet dis dui amet sem ut. In ultrices ....';
  @Input() porcentaje: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
