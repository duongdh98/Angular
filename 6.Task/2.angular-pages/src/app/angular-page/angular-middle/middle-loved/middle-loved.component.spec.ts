import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleLovedComponent } from './middle-loved.component';

describe('MiddleLovedComponent', () => {
  let component: MiddleLovedComponent;
  let fixture: ComponentFixture<MiddleLovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleLovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleLovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
