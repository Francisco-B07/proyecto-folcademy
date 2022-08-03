import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  pantalla: string = '';
  constructor() {}

  ngOnInit(): void {}
  seleccionoOpcion(opcion: string) {
    this.pantalla = opcion;
  }
}
