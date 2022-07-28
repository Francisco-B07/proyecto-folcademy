import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserI } from '../interfaces/user.interface'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = 'https://bisblick-back-muni.herokuapp.com/auth';
  constructor(private http:HttpClient) { 
  }

  loginByEmail(user: UserI): Observable < any > {
    
    // return this.afAuth.auth.singInWhitEmailAndPassword(email, password);
    return this.http.post(this.baseURL + '/login', user)

  }

  // logout() {
  //   this.afAuth.auth.singOn();
  // }
  
}
