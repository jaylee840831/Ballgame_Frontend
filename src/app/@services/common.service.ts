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
}
