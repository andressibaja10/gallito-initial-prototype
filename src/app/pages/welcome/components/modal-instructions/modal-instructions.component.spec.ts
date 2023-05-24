import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInstructionsComponent } from './modal-instructions.component';

describe('ModalInstructionsComponent', () => {
  let component: ModalInstructionsComponent;
  let fixture: ComponentFixture<ModalInstructionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalInstructionsComponent]
    });
    fixture = TestBed.createComponent(ModalInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
