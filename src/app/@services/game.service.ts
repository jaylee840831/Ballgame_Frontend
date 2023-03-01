import { CommonService } from './common.service';
import { Game, Games, GamePost } from './../@modules/games/games.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = '/api/v1/ballgame';

  constructor(public http : HttpClient, public commonService : CommonService) { }

  getGames(){
    // 模擬使用api從後端取得資料
    // return this.http.get<Games>('assets/games.json');

    return this.http.get<any>(this.url + '/all', { headers: this.commonService.getHeaderAuth() } );
  }

  getGame(id : number){
    // 模擬使用api從後端取得資料
    // return this.http.get<Games>('assets/games.json');

    return this.http.get<any>(this.url + '/' + id, { headers: this.commonService.getHeaderAuth() } );
  }

  addGame(value : GamePost){
    return this.http.post<any>(this.url + '/new', value, { headers: this.commonService.getHeaderAuth() } );
  }
}
