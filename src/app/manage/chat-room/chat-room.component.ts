import { WebsocketService } from './../../@services/websocket.service';
import { GameService } from './../../@services/game.service';
import { ModalService } from './../../@services/modal.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Game} from 'src/app/@modules/games/games.module';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy{

  uid = '';
  game : Game = new Game();
  stompClient:any;
  url = 'http://localhost:8080/server1';
  subscribeUrl = '/topic/return-to';
  messageObj!:Object;

  constructor(private websocketService : WebsocketService, private gameService : GameService,private modalService : ModalService ,private route : ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(data=>{
      this.uid = data.get('uid') as string;
    });

    this.gameService.getGame(this.uid).subscribe(data=>{
      this.game = data.games[0];
    });

    //stomp client connect
    this.stompClient = this.websocketService.connect(this.stompClient, this.url);


    //stomp client subscribe
    window.setTimeout(( () => { 
      this.stompClient.subscribe(this.subscribeUrl,(response:any) => {

        let message = JSON.parse(response.body);
        this.loadMessage(message);
      })
    }), 1000);

  }

  ngOnDestroy(): void {
    //stomp client disconnect
    if(this.stompClient !== null){
      this.websocketService.disconnect(this.stompClient);
    }
  }

  note(note : string){
    this.modalService.showView('備註',note);
  }

  loadMessage(message:any){
    $('.chat-log').append(
      '<div class="chat-log__item">'
      +'<img src="assets/ball.png">'
      +'<h3 class="chat-log__author">'
      +message.name
      +'<small>14:30</small></h3>'
      +'<div class="chat-log__message">'
      +message.content
      +'</div>'
      +'</div>'
    );
  }

  send(){

    let jsonObj={
      name : localStorage.getItem('account'),
      content : $('#messageInfo').val()
    }

    // console.log($('#messageInfo').val())

    this.stompClient.send('/app/message', {}, JSON.stringify(jsonObj));
  }

  // reloadPage(){
  //   this.ngOnInit();
  // }
}
