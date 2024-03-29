import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  pageActual: number = 1;
  cards: number = 0;
  constructor() {}

  ngOnInit(): void {}

  proyectos: Proyecto[] = [
    {
      tipo: 'suscripcion',
      imagen: '../../../../assets/bisblick2.jpg',
      titulo: 'Crowfunding por suscripción',
      descripcion:
        'Somos  miembro de Primero Educacion, un grupo de organizaciones de la sociedad jskdifnrlñas, pasomd psamdeun j kd clao lasjbk nd civil que .',
      recaudado: 30000,
      objetivo: 30000,
      opcion: 'DONAR',
    },
    {
      tipo: 'proyecto',
      imagen: '../../../../assets/bisblick.jpg',
      titulo: 'Ayudemos a Juan',
      descripcion:
        'Lorem ipsum dolor sit amet, consectetur olestias error quam fugit reprehenderit, adipisci cumque corporis nihil assumenda inventore repellat. .',
      recaudado: 130000,
      objetivo: 100000,
      opcion: 'DONAR',
    },
    {
      tipo: 'proyecto',
      imagen: '../../../../assets/bisblick2.jpg',
      titulo: 'Ayudemos a Dani',
      descripcion:
        'Somos miembro de Primero Educacion, un grupo de organizaciones de la sociedad jskdifnrlñas, pasomd psamdeun j kd clao lasjbk nd civil que trabajamos para .',
      recaudado: 30000,
      objetivo: 100000,
      opcion: 'DONAR',
    },
    {
      tipo: 'proyecto',
      imagen: '../../../../assets/bisblick3.jpg',
      titulo: 'Proyecto',
      descripcion:
        'Somos miembro de Primero Educacion, un grupo de organizaciones de la sociedad jskdifnrlñas, pasomd psamdeun j kd clao lasjbk nd civil que trabajamos para .',
      recaudado: 5,
      objetivo: 200,
      opcion: 'PARTICIPAR',
    },
    {
      tipo: 'proyecto',
      imagen: '../../../../assets/bisblick4.jpg',
      titulo: 'Proyecto Escolar',
      descripcion:
        'Somos miembro de Primero Educacion, un grupo de organizaciones de la j kd clao lasjbk nd civil que trabajamos para ubicar a la educación como prioridad nacional.',
      recaudado: 70,
      objetivo: 150,
      opcion: 'PARTICIPAR',
    },
    {
      tipo: 'proyecto',
      imagen: '../../../../assets/bisblick5.jpg',
      titulo: 'Proyecto',
      descripcion: 'Somos miembro de Primero Educacion',
      recaudado: 40000,
      objetivo: 100000,
      opcion: 'DONAR',
    },
    {
      tipo: 'proyecto',
      imagen: '../../../../assets/bisblick7.jpg',
      titulo: 'Proyecto',
      descripcion:
        'Somos miembro de Primero Educacion, un grupo de organizaciones de la sociedad jskdifnrlñas, pasomd psamdeun j kd clao lasjbk nd civil que trabajamos para .',
      recaudado: 300,
      objetivo: 300,
      opcion: 'PARTICIPAR',
    },
  ];
}
