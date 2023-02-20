import { GameService } from './../../@services/game.service';
import { ModalService } from './../../@services/modal.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Game} from 'src/app/@modules/games/games.module';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, AfterViewInit{

  uid = '';
  game : Game = new Game();

  constructor(public gameService : GameService,private modalService : ModalService ,private route : ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(data=>{
      this.uid = data.get('uid') as string;
    });

    this.gameService.getGame(this.uid).subscribe(data=>{
      this.game = data.games[0];
    });
  }

  ngAfterViewInit(){
  }

  note(note : string){
    this.modalService.showView('備註',note);
  }

  // reloadPage(){
  //   this.ngOnInit();
  // }
}
