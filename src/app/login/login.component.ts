import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPost } from '../@modules/login/login.module';
import { LoginService } from '../@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginValue: LoginPost = {
    email: '',
    password: '',
    status: 0,
    jwt: '',
    message:''  
  }

  constructor(private http : HttpClient, private router:Router, private loginService : LoginService) { }

  ngOnInit(): void {
  }

  login(){

    this.router.navigateByUrl('/manage');

    // this.loginService.jwtLogin(this.loginValue).subscribe((data: any) => {
    //   if (data.Status === 1) {
    //     localStorage.setItem('jwt', data.Data); //儲存jwt(json web token)在瀏覽器
    //     this.router.navigateByUrl('/manage');
    //   }else{
    //     alert(data.Message)
    //   }
    // });

    // 模擬使用api從後端取得資料
    this.http.get<LoginPost>('assets/login.json').subscribe(data=>{
      if (data.status === 1) {
        localStorage.setItem('jwt', data.jwt); //儲存jwt(json web token)在瀏覽器
        this.router.navigateByUrl('/manage');
      }else{
        alert(data.message)
      }
    });

  }
}
