import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginRoutingModule } from "../login/login-routing.module";
import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";

@NgModule({
    declarations: [
      RegisterComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      RegisterRoutingModule
    ]
  })
  export class RegisterModule { }