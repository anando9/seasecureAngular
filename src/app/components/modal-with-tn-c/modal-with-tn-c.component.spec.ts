import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWithTnCComponent } from './modal-with-tn-c.component';

describe('ModalWithTnCComponent', () => {
  let component: ModalWithTnCComponent;
  let fixture: ComponentFixture<ModalWithTnCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalWithTnCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWithTnCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
