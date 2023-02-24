import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  connect(stompClient:any, url:string){

    let socket = new SockJS(url);
    stompClient = Stomp.over(socket);

    stompClient.connect({},function(frame:any){
      console.log('connected: ' + frame);
    });

    return stompClient;
  }

  disconnect(stompClient:any){

    stompClient.disconnect(function(frame:any) {
      console.log('disconnected: ' + frame);
    });

  }
}
