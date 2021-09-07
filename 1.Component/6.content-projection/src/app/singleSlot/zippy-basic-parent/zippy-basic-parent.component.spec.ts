import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyBasicParentComponent } from './zippy-basic-parent.component';

describe('ZippyBasicParentComponent', () => {
  let component: ZippyBasicParentComponent;
  let fixture: ComponentFixture<ZippyBasicParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyBasicParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyBasicParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
