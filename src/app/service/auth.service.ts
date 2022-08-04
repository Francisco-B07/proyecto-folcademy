import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MailToFrom, UserI } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { ModificarPassword } from '../interfaces/modificarPassword';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL = 'https://bisblick-back-muni.herokuapp.com';

  constructor(private http: HttpClient) {}

  // async resetPassword(email:MailToFrom){
  //   try{
  //     return this.http.post(this.baseURL+'sendMailtemplate', email);
  //   }
  //   catch(error){console.log(error)}
  // }
  resetPassword(email: MailToFrom) {
    return this.http.post(this.baseURL + '/auth' + '/recuperar', email);
  }

  // async login(usuario: UserI) {
  //   try{
  //     const result = this.http.post(this.baseURL + '/login', usuario
  //     );
  //     return result; }
  //     catch (error) {
  //       console.log(error);
  //     }
  // }
  login(user: UserI) {
    return this.http.post(this.baseURL + '/auth' + '/login', user);
  }

  getSession() {
    let currentSession = localStorage.getItem('session');
    return currentSession;
  }
  sessionExists(): Boolean {
    return this.getSession() ? true : false;
  }

  loginByEmail(user: UserI): Observable<any> {
    // return this.afAuth.auth.singInWhitEmailAndPassword(email, password);
    return this.http.post(this.baseURL + '/auth' + '/login', user);
  }

  // logout() {
  //   this.afAuth.auth.singOn();
  // }
  modificarPassword(usuario: ModificarPassword): Observable<any> {
    console.log('usuario desde service', usuario);

    return this.http.post(this.baseURL + '/auth/change_password', usuario);
  }
}
