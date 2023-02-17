import { ManageComponent } from './manage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
