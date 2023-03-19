import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPost } from '../@modules/login/login.module';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = this.commonService.getBackendUrl()+'/api/v1/auth';
  // private url = '/api/v1/auth';

  constructor(private http : HttpClient, private commonService : CommonService) { }

  jwtLogin(value : LoginPost){
    return this.http.post(this.url + '/authenticate', value);
  }
}
