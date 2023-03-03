import { Component, OnInit } from '@angular/core';
import { AllMarkPost, MarkPost } from 'src/app/@modules/games/games.module';
import { GameService } from 'src/app/@services/game.service';
import { ModalService } from 'src/app/@services/modal.service';
import { ProfileService } from 'src/app/@services/profile.service';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.css']
})
export class GameHistoryComponent implements OnInit{

  marks : any;
  games : any;

  markValue : MarkPost = {
    email:'',
    gameId:-1
  }

  allMarkValue : AllMarkPost = {
    email:''
  }

  constructor(private gameService : GameService, private profileService : ProfileService, private modalService : ModalService){};

  ngOnInit(): void {

    this.allMarkValue.email = localStorage.getItem('email') as string;
    this.gameService.getMarkGames(this.allMarkValue).subscribe(data=>{
      
      this.games = data;
      this.loadTable();

    });

  }
  
  get gameList(){
    return this.games;
  }

  loadTable(){

    window.setTimeout(( () => (<any>$('#game_table')).DataTable(
      {
        "language": {
            "processing": "處理中...",
            "loadingRecords": "載入中...",
            "lengthMenu": "顯示 _MENU_ 項結果",
            "zeroRecords": "沒有符合的結果",
            "info": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
            "infoEmpty": "顯示第 0 至 0 項結果，共 0 項",
            "infoFiltered": "(從 _MAX_ 項結果中過濾)",
            "infoPostFix": "",
            "search": "搜尋:",
            "paginate": {
                "first": "第一頁",
                "previous": "上一頁",
                "next": "下一頁",
                "last": "最後一頁"
            },
            "aria": {
                "sortAscending": ": 升冪排列",
                "sortDescending": ": 降冪排列"
            }
        }
    }
    ) ), 1000);//延遲一秒後顯示datatable

  }

  note(note : string){
    this.modalService.showView('備註',note);
  }

  mark(id : number){

    this.markValue.email = localStorage.getItem("email") as string;
    this.markValue.gameId = id;

    if($("#"+id).attr("fill") == "currentColor"){

      this.gameService.markGame(this.markValue).subscribe(data=>{

        $("#"+id).attr({fill:"orange"});

      });

    }else{

      this.gameService.deleteMarkGame(this.markValue).subscribe(data=>{

        $("#"+id).attr({fill:"currentColor"});
        
      });

    }

  }

}
