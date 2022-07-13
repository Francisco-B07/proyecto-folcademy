import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-suscripcion',
  templateUrl: './card-suscripcion.component.html',
  styleUrls: ['./card-suscripcion.component.css'],
})
export class CardSuscripcionComponent implements OnInit {
  @Input() titulo: string = 'PROYECTO';
  @Input() imagen: string = '../../../../assets/imagen-no-encontrada.jpg';
  @Input() opcion: string = 'Donar';
  @Input() porcentaje: number = 0;
  @Input() descripcion: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet dis dui amet sem ut. In ultrices ....';

  constructor() {}

  ngOnInit(): void {}
}
