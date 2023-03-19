import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date: Date) {

    let MorningEvening = '';

    if(date.getHours() < 12){
      MorningEvening = 'AM';
    }
    else{
      MorningEvening = 'PM';
    }

    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        // this.padTo2Digits(date.getSeconds()),
      ].join(':') + ' ' + MorningEvening
    );
  }

  getHeaderAuth(){

    let httpHeaders = new HttpHeaders()
    .set("Access-Control-Allow-Origin", "*") // CORS HEADER
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept") // CORS HEADER
    .set("Access-Control-Allow-Credentials", "true")
    .set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    .set("Access-Control-Max-Age", "3600")
    .set('authorization', "Bearer " + localStorage.getItem('jwt'))
    .set('Content-Type', 'application/json');

    return httpHeaders;
  }

  getBackendUrl(){
    return ""; //填入自己的後端url
  }

  showAlert(message : string){

    $('#message-alert').css("display", "block");
    $('#message-alert').html(message);
    setTimeout(function() {
      $('#message-alert').css("display", "none");
    }, 3000);
    
  }
}
