import { ModalService } from './../../@services/modal.service';
import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Games } from 'src/app/@modules/games/games.module';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, AfterViewInit{

  noteModal: any;
  games!:Games;

  constructor(private http : HttpClient, private modalService : ModalService){};

  ngOnInit(): void {

    //模擬使用api從後端取得資料
    this.http.get<Games>('assets/games.json').subscribe(data=>{
      if(data != null){
        this.games = data;
      }
    });
  }

  ngAfterViewInit(){
    (<any>$('#game_table')).DataTable();
  }

  get gameList(){
    return this.games.games;
  }

  chatRoom(){

  }

  note(note : string){
    this.modalService.showView('備註',note);
  }
}
