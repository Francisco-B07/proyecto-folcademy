import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  auth =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYXNhQGdtYWlsLmNvbSIsImlhdCI6MTY1OTM2NDQwMCwiZXhwIjoxNjU5NDAwNDAwfQ.C_MFOOegUVcNT10dGVH4bIqZPeZxKCeEOjeoD3v9SBZ5D3R09EfrGDDeciUx5wQS-MvN2jNzpq5rV5Z6kPddjw';
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
