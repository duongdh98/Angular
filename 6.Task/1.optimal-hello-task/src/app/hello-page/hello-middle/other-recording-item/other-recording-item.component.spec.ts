import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRecordingItemComponent } from './other-recording-item.component';

describe('OtherRecordingItemComponent', () => {
  let component: OtherRecordingItemComponent;
  let fixture: ComponentFixture<OtherRecordingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherRecordingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRecordingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
