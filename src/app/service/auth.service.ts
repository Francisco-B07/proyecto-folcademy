import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private $httpClient: HttpClient;

  constructor(protected httpClient: HttpClient) {
    this.$httpClient = httpClient;
  }

  login(username: string, password: string): Observable<string> {
    // return this.$httpClient.get<string>(environment.backend + '/api/auth/login?username=' + username + '&password' + password);
    throw new Error('Method not implemented.');
  }

  
}
