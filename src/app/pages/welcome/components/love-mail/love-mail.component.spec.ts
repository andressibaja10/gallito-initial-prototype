import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveMailComponent } from './love-mail.component';

describe('LoveMailComponent', () => {
  let component: LoveMailComponent;
  let fixture: ComponentFixture<LoveMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoveMailComponent]
    });
    fixture = TestBed.createComponent(LoveMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
