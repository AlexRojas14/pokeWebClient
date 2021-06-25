import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ModalManager } from 'ngb-modal';
import { PokeDto } from '../dtos/poke.dto';

@Component({
  selector: 'app-detail-madal',
  templateUrl: './detail-madal.component.html',
  styleUrls: ['./detail-madal.component.scss']
})
export class DetailMadalComponent implements OnInit {
  
  private modalRef: any;

  @Input() poke = new PokeDto();
  @ViewChild('myModal') myModal = new ViewChild('myModal');

  constructor(private modalService: ModalManager) { }

  ngOnInit(): void {
  }
  
  openModal(){
    this.modalRef = this.modalService.open(this.myModal, {
        size: "lg",
        modalClass: 'mymodal',
        hideCloseButton: false,
        centered: false,
        backdrop: true,
        animation: true,
        keyboard: false,
        closeOnOutsideClick: true,
        backdropClass: "modal-backdrop"
    })
  }

  closeModal(){
    this.modalService.close(this.modalRef);
  }
}
