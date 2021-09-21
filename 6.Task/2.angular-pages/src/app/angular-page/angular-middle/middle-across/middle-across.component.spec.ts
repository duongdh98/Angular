import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleAcrossComponent } from './middle-across.component';

describe('MiddleAcrossComponent', () => {
  let component: MiddleAcrossComponent;
  let fixture: ComponentFixture<MiddleAcrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleAcrossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleAcrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
