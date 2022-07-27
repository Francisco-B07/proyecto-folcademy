import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  auth =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYW5pZWxuaWNvbGFzbXVuaXphZ2FAZ21haWwuY29tIiwiaWF0IjoxNjU4OTQ4Nzg1LCJleHAiOjE2NTg5ODQ3ODV9.4hkR3RvKEerH-MdP47CLuq7gjI1OEONIdn6gY6HSSE_-Gaz1P4-__rq5NmNbWFujoOCNQ6U9xed8cYLgFVV94w';
  baseURL = 'https://bisblick-back-muni.herokuapp.com/auth';
  constructor(private http: HttpClient) {}
  getUsuarios(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.get(this.baseURL + '/listartodos/page', {
      headers: headers,
    });
  }
  eliminarUsuario(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.delete(this.baseURL + '/eliminar/' + id, {
      headers: headers,
    });
  }
  crearUsuario(usuario: Usuario): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.post(this.baseURL + '/nuevo', usuario, {
      headers: headers,
    });
  }
  obtenerUsuario(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.get(this.baseURL + '/listaruno/' + id, {
      headers: headers,
    });
  }
  editarUsuario(id: number, usuario: Usuario): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.auth);

    return this.http.put(this.baseURL + '/editar/' + id, usuario, {
      headers: headers,
    });
  }
}
