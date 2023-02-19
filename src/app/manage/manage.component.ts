import { ModalService } from './../@services/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(public modalService : ModalService) { }

  ngOnInit(): void {
  }

}
