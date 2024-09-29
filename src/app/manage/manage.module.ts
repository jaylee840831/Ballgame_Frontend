import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ManageComponent } from './manage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoutingModule } from './manage-routing.module';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { ProfileComponent } from './profile/profile.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { GameAnalyzeComponent } from './game-analyze/game-analyze.component';
import { ModalComponent } from './modal/modal.component';
import { FriendsComponent } from './friends/friends.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    MenuComponent,
    ManageComponent,
    GameComponent,
    ChatRoomComponent,
    ProfileComponent,
    NewGameComponent,
    GameHistoryComponent,
    GameAnalyzeComponent,
    ModalComponent,
    FriendsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ManageRoutingModule,
    MatTableModule,         // 表格模組
    MatSortModule,          // 排序模組
    MatPaginatorModule      // 分頁模組
  ]
})
export class ManageModule { }
