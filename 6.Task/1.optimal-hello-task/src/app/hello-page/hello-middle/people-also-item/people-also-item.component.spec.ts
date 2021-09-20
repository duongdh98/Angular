import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAlsoItemComponent } from './people-also-item.component';

describe('PeopleAlsoItemComponent', () => {
  let component: PeopleAlsoItemComponent;
  let fixture: ComponentFixture<PeopleAlsoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleAlsoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAlsoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
