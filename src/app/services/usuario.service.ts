import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  token: string = this.localstorage.get('token');

  // auth =
  //   'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvbG1vc0BnbWFpbC5jb20iLCJpYXQiOjE2NTk1NDc3ODcsImV4cCI6MTY1OTU4Mzc4N30.VM9iMOlCMrVs-CunLOfrHPPSkxy7tc7urGJQ7_eUqJevhNcpOqHZXDQEbRpvDKoXvKj-_Gu4po3xUEcFRcRSTg';
  // auth = this.token;
  baseURL = 'https://bisblick-back-muni.herokuapp.com/';
  constructor(
    private http: HttpClient,
    private localstorage: LocalstorageService
  ) {}

  getUsuarios(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.token);

    return this.http.get(this.baseURL + 'auth/listartodos/page', {
      headers: headers,
    });
  }

  eliminarUsuario(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.token);

    return this.http.delete(this.baseURL + 'auth/eliminar/' + id, {
      headers: headers,
    });
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.token);

    return this.http.post(this.baseURL + 'auth/nuevo', usuario, {
      headers: headers,
    });
  }
  obtenerUsuario(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.token);

    return this.http.get(this.baseURL + 'auth/listaruno/' + id, {
      headers: headers,
    });
  }
  editarUsuario(id: number, usuario: Usuario): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.token);

    return this.http.put(this.baseURL + 'auth/editar/' + id, usuario, {
      headers: headers,
    });
  }
}
