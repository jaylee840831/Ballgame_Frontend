import { CommonService } from './../../@services/common.service';
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

  uid!:number;
  game : Game = new Game();
  stompClient:any;
  url = this.commonService.getBackendUrl()+'/server1';
  subscribeUrl = '/topic/return-to';

  constructor(private commonService : CommonService, private websocketService : WebsocketService, private gameService : GameService,private modalService : ModalService ,private route : ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(data=>{
      this.uid = data.get('id') as unknown as number;
    });

    this.gameService.getGame(this.uid).subscribe((data: any)=>{
      this.game = data;
    });

    this.gameService.getChat(this.uid).subscribe((data: any)=>{

      for(var d of data ){
        this.loadMessage(d);
      }

    });

    //stomp client connect
    this.stompClient = this.websocketService.connect(this.stompClient, this.url);


    //stomp client subscribe
    window.setTimeout(( () => { 
      this.stompClient.subscribe(this.subscribeUrl,(response:any) => {

        let message = JSON.parse(response.body);
        this.loadMessage(message);

      })
    }), 4000);

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

    if(message.groupUid == this.uid){

      if(localStorage.getItem('account') != message.name){

        $('.chat-log').append(
          '<div style="	background: #fafafa;padding: 10px;margin: 0 auto 20px;max-width: 80%;float: left;border-radius: 4px;box-shadow: 0 1px 2px rgba(0,0,0,.1);clear: both;">'
          +'<img src="assets/basketball.png" style="width:100px;height:100px">'
          +'<h3 style="	margin: 0 auto .5em;font-size: 18px;font-weight: bold;">'
          +message.name+'&nbsp;</h3>'
          +'<div>'
          +message.content
          +'</div>'
          +'<div>'
          +'<small style="font-weight: bold;">'+ this.commonService.formatDate(new Date(message.date)) +'</small>'
          +'</div>'
          +'</div>'
        );
  
      }
      else{
  
        $('.chat-log').append(
          '<div style="	background: #fafafa;padding: 10px;margin: 0 auto 20px;max-width: 80%;float: left;border-radius: 4px;box-shadow: 0 1px 2px rgba(0,0,0,.1);clear: both;	float: right;background: #DCF8C6;text-align: right;">'
          +'<img src="assets/basketballplayer.png" style="width:100px;height:100px">'
          +'<h3 style="	margin: 0 auto .5em;font-size: 18px;font-weight: bold;">'
          +message.name+'&nbsp;</h3>'
          +'<div>'
          +message.content
          +'</div>'
          +'<div>'
          +'<small style="font-weight: bold;">'+ this.commonService.formatDate(new Date(message.date)) +'</small>'
          +'</div>'
          +'</div>'
        );
  
      }

    }

  }

  send(){

    let jsonObj={
      groupUid : this.uid,
      name : localStorage.getItem('account'),
      content : $('#messageInfo').val(),
      date : new Date()
    }

    this.stompClient.send('/app/message', {}, JSON.stringify(jsonObj));
    $('#messageInfo').val('')
  }

  // reloadPage(){
  //   this.ngOnInit();
  // }
}
