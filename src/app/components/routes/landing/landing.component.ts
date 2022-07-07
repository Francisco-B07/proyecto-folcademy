import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  proyectos: Proyecto[] = [
    {
      titulo: 'Proyecto',
      descripcion:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur molestias error quam fugit reprehenderit, adipisci cumque corporis nihil assumenda inventore repellat. Enim corrupti necessitatibus voluptate quibusdam illum nam assumenda.',
      imagen: '',
      opcion: 'Donar',
    },
  ];
}
