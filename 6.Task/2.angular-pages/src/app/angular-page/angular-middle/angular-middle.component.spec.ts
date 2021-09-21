import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMiddleComponent } from './angular-middle.component';

describe('AngularMiddleComponent', () => {
  let component: AngularMiddleComponent;
  let fixture: ComponentFixture<AngularMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
