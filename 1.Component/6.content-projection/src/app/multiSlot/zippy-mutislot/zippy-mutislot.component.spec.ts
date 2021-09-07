import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyMutislotComponent } from './zippy-mutislot.component';

describe('ZippyMutislotComponent', () => {
  let component: ZippyMutislotComponent;
  let fixture: ComponentFixture<ZippyMutislotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyMutislotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyMutislotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
