import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos-admin',
  templateUrl: './proyectos-admin.component.html',
  styleUrls: ['./proyectos-admin.component.css'],
})
export class ProyectosAdminComponent implements OnInit {
  pageActual: number = 1;
  opcion: string = 'proyectos';
  toSearch = '';

  seleccionoOpcion(opcion: string) {
    this.opcion = opcion;
  }
  proyectos: any[] = [
    {
      nombre: 'Crowfunding',
      tipoDeProyecto: 'Suscripcion',
      estado: 'Activo ',
    },
    {
      nombre: 'Proyecto',
      tipoDeProyecto: 'Donar',
      estado: 'Desactivo',
    },
    {
      nombre: 'Proyecto Juan',
      tipoDeProyecto: 'Voluntariado',
      estado: 'Cerrado',
    },
  ];
  encountered: any[] = this.proyectos;
  constructor() {}

  ngOnInit(): void {}
  search() {
    this.encountered = this.proyectos;

    this.encountered = this.proyectos.filter((res) => {
      if (res.nombre) {
        return (
          res.nombre
            .toLocaleLowerCase()
            .match(this.toSearch.toLocaleLowerCase()) ||
          res.tipoDeProyecto
            .toLocaleLowerCase()
            .match(this.toSearch.toLocaleLowerCase())
        );
      }
    });
  }
}
