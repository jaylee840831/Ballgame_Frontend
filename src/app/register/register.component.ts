import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPost } from '../@modules/login/login.module';
import { RegisterService } from '../@services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerValue: RegisterPost ={
    name:'',
    email: '',
    password: ''
  }

  alertStyle = '';

  constructor(private http : HttpClient, private router:Router, private registerService : RegisterService) { }

  ngOnInit(): void {
  }

  register(){

    var emailRegxp = /[\w-]+@([\w-]+\.)+[\w-]+/;

    if(this.registerValue.name.length == 0 || this.registerValue.email.length == 0 || this.registerValue.password.length == 0){

      this.showAlert(0, '資料不可為空');

    } else if(this.registerValue.password.length !== 8){

      this.showAlert(0, '密碼需為8個字元');
      
    } else if(emailRegxp.test(this.registerValue.email) != true){

      this.showAlert(0, 'email格式錯誤');

    }
    else{

      this.registerService.register(this.registerValue).subscribe((data: any) => {

        if (data.status === 1) {

          localStorage.setItem('account',data.name);
          localStorage.setItem('jwt', data.jwt); //儲存jwt(json web token)在瀏覽器
          this.router.navigateByUrl('/login');
          this.showAlert(data.status, data.message);

        }else{

          this.showAlert(data.status, data.message);

        }
        
      },
      (err : any) => {
        this.showAlert(0, "註冊失敗，請重新輸入或請洽客服");
      });

    }

  }

  showAlert(status : number, message : string){

    if(status === 1){

      this.alertStyle = 'alert-success';

    }else{

      this.alertStyle = 'alert-danger';

    }

    $('#message-alert').css("visibility", "visible");
    $('#message-alert').html(message);
    setTimeout(function() {
      $('#message-alert').css("visibility", "hidden");
    }, 3000);
    
  }
}
