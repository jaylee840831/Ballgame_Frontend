import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPost } from '../@modules/login/login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = '/api/v1/auth';

  constructor(private http : HttpClient) { }

  jwtLogin(value : LoginPost){
    return this.http.post(this.url + '/authenticate', value);
  }
}
