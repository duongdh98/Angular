import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSpeedPerformanceComponent } from './middle-speed-performance.component';

describe('MiddleSpeedPerformanceComponent', () => {
  let component: MiddleSpeedPerformanceComponent;
  let fixture: ComponentFixture<MiddleSpeedPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleSpeedPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleSpeedPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
