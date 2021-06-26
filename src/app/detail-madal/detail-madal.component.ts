import { ReportFileResponse } from './../dtos/ReportFileResponse.dto';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ModalManager } from 'ngb-modal';

import { PokeDto } from '../dtos/poke.dto';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-detail-madal',
  templateUrl: './detail-madal.component.html',
  styleUrls: ['./detail-madal.component.scss']
})
export class DetailMadalComponent implements OnInit {
  
  private modalRef: any;

  @Input() poke = new PokeDto();
  @ViewChild('myModal') myModal = new ViewChild('myModal');

  constructor(
              private modalService: ModalManager,
              private pokemonService: PokemonService,
             ) { }

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

  downloadDetail() {
    this.pokemonService.downloadDetail(this.poke.id)
        .subscribe(data => {
          this.processDownload(data);
        }, error => {

        });
  }

  closeModal(){
    this.modalService.close(this.modalRef);
  }

  processDownload(data: ReportFileResponse) {
    let url = window.URL.createObjectURL(data.FileContent);
    let anchorDownload: HTMLAnchorElement = document.createElement('a');
    anchorDownload.href = url;
    anchorDownload.download = `Detalle_del_Pokemon_${this.poke.name}.txt`;
    let node = document.body.appendChild(anchorDownload);
    anchorDownload.click();
    document.body.removeChild(node);
  }
}
