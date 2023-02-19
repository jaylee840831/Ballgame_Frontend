import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  showDialog = false;
  title = '';
  content = '';

  constructor(){};

  showView(t : string, note : string){
    this.showDialog = true;
    this.title = t;
    this.content = note;
  }

  getTitle(){
    return this.title;
  }

  getContent(){
    return this.content;
  }

  closeView(){
    this.showDialog = false;
  }
}
