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

  // async resetPassword(email:string):Promise<void>{
  //   try{
  //     return this.http.sendPasswordResetEmail(email);
  //   }
  //   catch(error){console.log(error)}
  // }

  // async sendVerificationEmail(): Promise<void> {
  //   return (await this.http.currentUser).sendEmailVerification();
  // }

  // async login(email: string, password: string) {
  //   try{
  //     const result = await this.http.singInWithEmailAndPassword(
  //       email,
  //       password
  //     );
  //     return result;
  //     catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }

  getSession() {
    let currentSession = localStorage.getItem('session');
    return currentSession;
  }
  sessionExists(): Boolean {
    return (this.getSession()) ? true : false;
  }

  loginByEmail(user: UserI): Observable < any > {
    
    // return this.afAuth.auth.singInWhitEmailAndPassword(email, password);
    return this.http.post(this.baseURL + '/login', user)

  }

  // logout() {
  //   this.afAuth.auth.singOn();
  // }
  
}
