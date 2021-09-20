import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoSearchItemComponent } from './also-search-item.component';

describe('AlsoSearchItemComponent', () => {
  let component: AlsoSearchItemComponent;
  let fixture: ComponentFixture<AlsoSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsoSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
