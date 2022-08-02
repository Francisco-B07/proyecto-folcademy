import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  auth =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvbG1vc0BnbWFpbC5jb20iLCJpYXQiOjE2NTk0NTg4NzgsImV4cCI6MTY1OTQ5NDg3OH0.sVBC1TSW8Ji0a4p8Sjoy1PJ0a57wulpo6b6jXpcwZxTE3xing9tbwu5cPhlP56H81EEkOyNsZEwKSXx0QhMebA';
  baseURL = 'https://bisblick-back-muni.herokuapp.com/';
  constructor(private http: HttpClient) {}
  getUsuarios(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.get(this.baseURL + 'auth/listartodos/page', {
      headers: headers,
    });
  }

  eliminarUsuario(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.delete(this.baseURL + 'auth/eliminar/' + id, {
      headers: headers,
    });
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.post(this.baseURL + 'auth/nuevo', usuario, {
      headers: headers,
    });
  }
  obtenerUsuario(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.get(this.baseURL + 'auth/listaruno/' + id, {
      headers: headers,
    });
  }
  editarUsuario(id: number, usuario: Usuario): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.put(this.baseURL + 'auth/editar/' + id, usuario, {
      headers: headers,
    });
  }
}
