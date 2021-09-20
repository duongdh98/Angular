import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherContentItemComponent } from './other-content-item.component';

describe('OtherContentItemComponent', () => {
  let component: OtherContentItemComponent;
  let fixture: ComponentFixture<OtherContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherContentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
