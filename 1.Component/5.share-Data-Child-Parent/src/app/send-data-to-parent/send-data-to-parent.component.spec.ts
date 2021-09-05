import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDataToParentComponent } from './send-data-to-parent.component';

describe('SendDataToParentComponent', () => {
  let component: SendDataToParentComponent;
  let fixture: ComponentFixture<SendDataToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendDataToParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDataToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
