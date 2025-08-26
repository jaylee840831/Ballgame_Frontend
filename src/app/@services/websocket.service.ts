import { Injectable } from '@angular/core';
// import { Stomp } from '@stomp/stompjs';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  connect(url:string){

    // let socket = new SockJS(url);
    // stompClient = Stomp.over(socket);

    return new Client({
      webSocketFactory: () => new SockJS(url),
      reconnectDelay: 5000, // 啟用自動重連（ms）
      debug: (str: any) => console.log(str)
    });
  }

  disconnect(stompClient:any){
    stompClient.deactivate().then(() => {
      console.log('Disconnected');
    });
  }
}
