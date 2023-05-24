import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInstructionsComponent } from '../modal-instructions/modal-instructions.component';

@Component({
  selector: 'sweet-love',
  templateUrl: './sweet-love.component.html',
  styleUrls: ['./sweet-love.component.scss']
})
export class SweetLoveComponent {

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
        panelClass: 'wrapper-modal-sweet-love',
        maxWidth: '100vw',
        data: { route: 'sweet-love-step-one' }
      })
  }
}
