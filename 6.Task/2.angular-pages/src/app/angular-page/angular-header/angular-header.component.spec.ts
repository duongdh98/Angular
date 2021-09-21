import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHeaderComponent } from './angular-header.component';

describe('AngularHeaderComponent', () => {
  let component: AngularHeaderComponent;
  let fixture: ComponentFixture<AngularHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
