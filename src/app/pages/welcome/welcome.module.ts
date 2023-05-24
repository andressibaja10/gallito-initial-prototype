import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { LoveMailComponent } from './components/love-mail/love-mail.component';
import { SweetLoveComponent } from './components/sweet-love/sweet-love.component';
import { ModalInstructionsComponent } from './components/modal-instructions/modal-instructions.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    LoveMailComponent,
    SweetLoveComponent,
    ModalInstructionsComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class WelcomeModule { }
