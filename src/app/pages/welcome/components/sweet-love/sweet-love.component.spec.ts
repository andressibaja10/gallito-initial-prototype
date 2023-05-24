import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetLoveComponent } from './sweet-love.component';

describe('SweetLoveComponent', () => {
  let component: SweetLoveComponent;
  let fixture: ComponentFixture<SweetLoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetLoveComponent]
    });
    fixture = TestBed.createComponent(SweetLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
