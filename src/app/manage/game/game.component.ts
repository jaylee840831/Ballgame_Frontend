import { ModalService } from './../../@services/modal.service';
import { AfterViewInit, Component, OnInit} from '@angular/core';
import { GameService } from 'src/app/@services/game.service';
import { Game, Games } from 'src/app/@modules/games/games.module';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit{

  games : any;

  constructor(private gameService : GameService, private modalService : ModalService){};

  ngOnInit(): void {

    this.gameService.getGames().subscribe(data=>{
      
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
}
