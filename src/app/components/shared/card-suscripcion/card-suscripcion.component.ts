import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-suscripcion',
  templateUrl: './card-suscripcion.component.html',
  styleUrls: ['./card-suscripcion.component.css'],
})
export class CardSuscripcionComponent implements OnInit {
  @Input() imagen: string = '../../../../assets/image 122.png';
  @Input() titulo: string = 'PROYECTO';
  @Input() descripcion: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet dis dui amet sem ut. In ultrices ....';
  @Input() recaudado: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
