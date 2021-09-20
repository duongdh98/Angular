import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPageItemComponent } from './next-page-item.component';

describe('NextPageItemComponent', () => {
  let component: NextPageItemComponent;
  let fixture: ComponentFixture<NextPageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
