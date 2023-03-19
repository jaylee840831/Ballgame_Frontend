
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ProcessBarModule } from './@shared/process-bar/process-bar.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import * as $ from 'jquery';
import { BasicAuthHtppInterceptorService } from './@services/basic-auth-htpp-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ProcessBarModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    // } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
