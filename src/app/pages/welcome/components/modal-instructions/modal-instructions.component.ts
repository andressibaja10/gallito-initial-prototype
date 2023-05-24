import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-instructions',
  templateUrl: './modal-instructions.component.html',
  styleUrls: ['./modal-instructions.component.scss']
})
export class ModalInstructionsComponent implements OnInit {

  route: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataMessage: any
  ) {
    this.route = dataMessage.route
  }

  ngOnInit(): void {
  }
}
