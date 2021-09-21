import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleModernComponent } from './middle-modern.component';

describe('MiddleModernComponent', () => {
  let component: MiddleModernComponent;
  let fixture: ComponentFixture<MiddleModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleModernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
