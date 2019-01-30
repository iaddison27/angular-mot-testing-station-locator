import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'about-modal',
  templateUrl: './about-modal.component.html'
})
export class AboutModalComponent {

  constructor(public activeModal: NgbActiveModal) {}

}
