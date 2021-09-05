import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotertalkerComponent } from './votertalker.component';

describe('VotertalkerComponent', () => {
  let component: VotertalkerComponent;
  let fixture: ComponentFixture<VotertalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotertalkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotertalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
