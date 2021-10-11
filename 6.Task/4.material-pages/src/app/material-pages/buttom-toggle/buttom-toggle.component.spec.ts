import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomToggleComponent } from './buttom-toggle.component';

describe('ButtomToggleComponent', () => {
  let component: ButtomToggleComponent;
  let fixture: ComponentFixture<ButtomToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
