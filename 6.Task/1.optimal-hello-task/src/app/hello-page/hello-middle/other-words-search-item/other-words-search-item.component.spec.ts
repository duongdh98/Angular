import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWordsSearchItemComponent } from './other-words-search-item.component';

describe('OtherWordsSearchItemComponent', () => {
  let component: OtherWordsSearchItemComponent;
  let fixture: ComponentFixture<OtherWordsSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherWordsSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherWordsSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
