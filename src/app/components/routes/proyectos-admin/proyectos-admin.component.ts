import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos-admin',
  templateUrl: './proyectos-admin.component.html',
  styleUrls: ['./proyectos-admin.component.css'],
})
export class ProyectosAdminComponent implements OnInit {
  pageActual: number = 1;

  toSearch = '';
  proyectos: any[] = [
    {
      nombre: 'Crowfunding',
      tipoDeProyecto: 'Suscripcion',
      fechaDeInicio: '24/5/2022',
      fechaDeFin: '24/5/2023',
    },
    {
      nombre: 'Proyecto donar',
      tipoDeProyecto: 'Donar',
      fechaDeInicio: '24/5/2022',
      fechaDeFin: '24/5/2023',
    },
    {
      nombre: 'Proyecto Participar',
      tipoDeProyecto: 'Participar',
      fechaDeInicio: '24/5/2022',
      fechaDeFin: '24/5/2023',
    },
    {
      nombre: 'Proyecto Participar',
      tipoDeProyecto: 'Participar',
      fechaDeInicio: '24/5/2022',
      fechaDeFin: '24/5/2023',
    },
    {
      nombre: 'Proyecto Participar',
      tipoDeProyecto: 'Participar',
      fechaDeInicio: '24/5/2022',
      fechaDeFin: '24/5/2023',
    },
    {
      nombre: 'Proyecto Participar',
      tipoDeProyecto: 'Participar',
      fechaDeInicio: '24/5/2022',
      fechaDeFin: '24/5/2023',
    },
    {
      nombre: 'Proyecto Participar',
      tipoDeProyecto: 'Participar',
      fechaDeInicio: '24/5/2022',
      fechaDeFin: '24/5/2023',
    },
  ];
  encountered: any[] = [];
  constructor() {}

  ngOnInit(): void {}
  search() {
    this.encountered = this.proyectos.filter((res) => {
      if (res.title) {
        return res.title
          .toLocaleLowerCase()
          .match(this.toSearch.toLocaleLowerCase());
      }
      if (res.name) {
        return res.name
          .toLocaleLowerCase()
          .match(this.toSearch.toLocaleLowerCase());
      }
    });
  }
}
