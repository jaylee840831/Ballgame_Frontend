import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../@guard/auth.guard';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { FriendsComponent } from './friends/friends.component';
import { GameAnalyzeComponent } from './game-analyze/game-analyze.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { GameComponent } from './game/game.component';

import { ManageComponent } from './manage.component';
import { NewGameComponent } from './new-game/new-game.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { 
    path:'',
    component:ManageComponent,
    children:[
      {path:'game',component:GameComponent},
      {path:'chat/:id',component:ChatRoomComponent},
      {path:'profile',component:ProfileComponent},
      {path:'newGame',component:NewGameComponent},
      {path:'history',component:GameHistoryComponent},
      {path:'analyze',component:GameAnalyzeComponent},
      {path:'friends',component:FriendsComponent},
      {path:'',redirectTo:'game',pathMatch:'full'}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
