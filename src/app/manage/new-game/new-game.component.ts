import { GameService } from './../../@services/game.service';
import { Component } from '@angular/core';
import { GamePost } from 'src/app/@modules/games/games.module';
import { CommonService } from 'src/app/@services/common.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {

  response = '';

  gameValue: GamePost = {
    sponsor:'',
    gameName:'',
    courtName:'',
    startDate:new Date(),
    endDate:new Date(),
    note:''
  }

  constructor(private commonService : CommonService, private gameService : GameService) { }

  ngOnInit(): void {

    this.gameValue.sponsor = localStorage.getItem('account') as string;

  }

  confirm(){

    $("#message-alert").removeClass("alert-success");
    $("#message-alert").addClass("alert-danger");

    if(this.gameValue.sponsor == "" || this.gameValue.gameName == "" || this.gameValue.courtName == "" || 
        $("#startDate").val() == "" || $("#endDate").val() == ""){

      this.commonService.showAlert("任一欄位不可為空(備註除外)，開始與結束時間需輸入完整");

    }else{

      this.gameValue.startDate = $("#startDate").val() + '+0800' as unknown as Date;
      this.gameValue.endDate = $("#endDate").val() + '+0800' as unknown as Date;

      this.gameService.addGame(this.gameValue).subscribe((data: any)=>{
      
        if(data.response.status === 1){

          $("#message-alert").removeClass("alert-danger");
          $("#message-alert").addClass("alert-success");
          this.commonService.showAlert(data.response.message);

        }else{

          this.commonService.showAlert(data.response.message);

        }
  
      });

    }

  }
}
