import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPost } from '../@modules/login/login.module';
import { LoginService } from '../@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginValue: LoginPost = {
    account: '',
    password: '',
    status: 0,
    jwt: '',
    message:''  
  }

  constructor(private http : HttpClient, private router:Router, private loginService : LoginService) { }

  ngOnInit(): void {
  }

  login(){

    if(this.loginValue.account.length == 0 || this.loginValue.password.length == 0){

      this.showAlert('帳號或密碼不可為空');

    }else{

      // this.loginService.jwtLogin(this.loginValue).subscribe((data: any) => {
      //   if (data.Status === 1) {
      //     localStorage.setItem('account',this.loginValue.account);
      //     localStorage.setItem('jwt', data.jwt); //儲存jwt(json web token)在瀏覽器
      //     this.router.navigateByUrl('/manage');
      //   }else{
      //     this.showAlert(data.message);
      //   }
      // });

      // 模擬使用api從後端取得資料
      this.http.get<LoginPost>('assets/login.json').subscribe(data=>{
        if (data.status === 1) {
          localStorage.setItem('account',this.loginValue.account);
          localStorage.setItem('jwt', data.jwt); //儲存jwt(json web token)在瀏覽器
          this.router.navigateByUrl('/manage');
        }else{
          this.showAlert(data.message);
        }
      });

    }

  }

  showAlert(message : string){

    $('#message-alert').css("visibility", "visible");
    $('#message-alert').html(message);
    setTimeout(function() {
      $('#message-alert').css("visibility", "hidden");
    }, 3000);
    
  }
}
