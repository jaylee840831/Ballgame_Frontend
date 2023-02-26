import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPost } from '../@modules/login/login.module';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = '/api/v1/auth';

  constructor(private http : HttpClient) { }

  register(value : RegisterPost){
    return this.http.post(this.url + '/register', value);
  }
}
