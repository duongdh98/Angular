import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyMutislotParentComponent } from './zippy-mutislot-parent.component';

describe('ZippyMutislotParentComponent', () => {
  let component: ZippyMutislotParentComponent;
  let fixture: ComponentFixture<ZippyMutislotParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyMutislotParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyMutislotParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
