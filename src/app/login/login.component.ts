import { CommonService } from './../@services/common.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPost, LoginResponse } from '../@modules/login/login.module';
import { LoginService } from '../@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginValue: LoginPost = {
    email: '',
    password: ''
  }

  // loginResponse: LoginResponse = {
  //   name: '',
  //   status: 0,
  //   jwt: '',
  //   message:''  
  // }

  constructor(private http : HttpClient, private router:Router, private loginService : LoginService, private commonService : CommonService) { }

  ngOnInit(): void {
  }

  login(){

    if(this.loginValue.email.length == 0 || this.loginValue.password.length == 0){

      this.commonService.showAlert('帳號或密碼不可為空');

    }else{

      this.loginService.jwtLogin(this.loginValue).subscribe((data: any) => {

        if (data.status === 1) {
          localStorage.setItem('account',data.name);
          localStorage.setItem('jwt', data.jwt); //儲存jwt(json web token)在瀏覽器
          this.router.navigateByUrl('/manage');
        }else{
          this.commonService.showAlert(data.message);
        }
        
      },
      (err : any) => {
        this.commonService.showAlert("登入失敗，請檢查帳號密碼是否正確以及帳號是否有註冊或是請洽客服")
      });

      //模擬使用api從後端取得資料
      // this.http.get<LoginPost>('assets/login.json').subscribe(data=>{
      //   if (data.status === 1) {
      //     localStorage.setItem('account',this.loginValue.account);
      //     localStorage.setItem('jwt', data.jwt); //儲存jwt(json web token)在瀏覽器
      //     this.router.navigateByUrl('/manage');
      //   }else{
      //     this.showAlert(data.message);
      //   }
      // });

    }

  }
}
