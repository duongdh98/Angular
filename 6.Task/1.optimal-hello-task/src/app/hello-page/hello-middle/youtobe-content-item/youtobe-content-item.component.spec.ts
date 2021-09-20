import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutobeContentItemComponent } from './youtobe-content-item.component';

describe('YoutobeContentItemComponent', () => {
  let component: YoutobeContentItemComponent;
  let fixture: ComponentFixture<YoutobeContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutobeContentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutobeContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
