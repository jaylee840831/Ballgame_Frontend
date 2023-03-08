import { CommonService } from './common.service';
import { Game, Games, GamePost, MarkPost, AllMarkPost } from './../@modules/games/games.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = '/api/v1/ballgame';

  constructor(public http : HttpClient, public commonService : CommonService) { }

  getGames(value : AllMarkPost){
    // 模擬使用api從後端取得資料
    // return this.http.get<Games>('assets/games.json');

    return this.http.post<any>(this.url + '/all', value, { headers: this.commonService.getHeaderAuth() } );
  }

  getGame(id : number){
    // 模擬使用api從後端取得資料
    // return this.http.get<Games>('assets/games.json');

    return this.http.get<any>(this.url + '/' + id, { headers: this.commonService.getHeaderAuth() } );
  }

  getChat(id : number){
    return this.http.get<any>(this.url + '/chatMessages/' + id, { headers: this.commonService.getHeaderAuth() } );
  }

  addGame(value : GamePost){
    return this.http.post<any>(this.url + '/new', value, { headers: this.commonService.getHeaderAuth() } );
  }

  getMarkGames(value : AllMarkPost){
    // 模擬使用api從後端取得資料
    // return this.http.get<Games>('assets/games.json');

    return this.http.post<any>(this.url + '/mark/user', value, { headers: this.commonService.getHeaderAuth() } );
  }

  markGame(value : MarkPost){
    return this.http.post<any>(this.url + '/mark', value, { headers: this.commonService.getHeaderAuth() } );
  }

  deleteMarkGame(value : MarkPost){
    return this.http.post<any>(this.url + '/mark/delete', value, { headers: this.commonService.getHeaderAuth() } );
  }
}
