import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnandComponent } from './anand.component';

describe('AnandComponent', () => {
  let component: AnandComponent;
  let fixture: ComponentFixture<AnandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
