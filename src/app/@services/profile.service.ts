import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userInfoPost } from '../@modules/user.module';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = '/api/v1/user';

  constructor(private http : HttpClient, private commonService : CommonService) { }

  editUserInfo(value : userInfoPost){
    return this.http.post<any>(this.url + '/info/edit', value, { headers: this.commonService.getHeaderAuth() });
  }

  getUserInfo(value : string){
    return this.http.post<any>(this.url + '/info/get', value, { headers: this.commonService.getHeaderAuth() });
  }

}
