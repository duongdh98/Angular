import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDataToChildComponent } from './send-data-to-child.component';

describe('SendDataToChildComponent', () => {
  let component: SendDataToChildComponent;
  let fixture: ComponentFixture<SendDataToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendDataToChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDataToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
