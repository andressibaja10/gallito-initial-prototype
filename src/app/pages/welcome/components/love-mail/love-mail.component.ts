import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInstructionsComponent } from '../modal-instructions/modal-instructions.component';

@Component({
  selector: 'love-mail',
  templateUrl: './love-mail.component.html',
  styleUrls: ['./love-mail.component.scss']
})
export class LoveMailComponent {

  constructor(
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  /**
   * @author Andres Sibaja 
   * @date 5/2/2023
   * @description Method to open modal with the instructions
   */
  openModal() {
    this._matDialog.open(ModalInstructionsComponent,
      {
        panelClass: 'wrapper-modal-love-mail',
        maxWidth: '100vw',
        data: { route: 'love-mail-step-one' }
      })
  }
}
