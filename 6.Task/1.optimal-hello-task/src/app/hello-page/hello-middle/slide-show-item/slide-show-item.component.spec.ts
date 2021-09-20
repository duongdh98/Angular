import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowItemComponent } from './slide-show-item.component';

describe('SlideShowItemComponent', () => {
  let component: SlideShowItemComponent;
  let fixture: ComponentFixture<SlideShowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideShowItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
