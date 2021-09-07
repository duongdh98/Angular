import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerParentComponent } from './countdown-timer-parent.component';

describe('CountdownTimerParentComponent', () => {
  let component: CountdownTimerParentComponent;
  let fixture: ComponentFixture<CountdownTimerParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
