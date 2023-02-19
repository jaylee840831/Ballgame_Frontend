import { ModalService } from './../../@services/modal.service';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit{
  constructor(public modalService : ModalService) {}

  @Input() title: string = '';
  @Input() body: string = '';
  // @Output() closeMeEvent = new EventEmitter();
  // @Output() confirmEvent = new EventEmitter();
  
  ngOnInit(): void {
    this.title = this.modalService.getTitle();
    this.body = this.modalService.getContent();
  }

  confirm(){
    this.modalService.closeView();
  }

}
