import { Game, Games} from './../@modules/games/games.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public http : HttpClient) { }

  getGames(){
    // 模擬使用api從後端取得資料
    return this.http.get<Games>('assets/games.json');
  }

  getGame(uid : string){
    // 模擬使用api從後端取得資料
    return this.http.get<Games>('assets/games.json');
  }
}
