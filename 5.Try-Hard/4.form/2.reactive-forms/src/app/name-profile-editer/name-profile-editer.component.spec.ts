import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameProfileEditerComponent } from './name-profile-editer.component';

describe('NameProfileEditerComponent', () => {
  let component: NameProfileEditerComponent;
  let fixture: ComponentFixture<NameProfileEditerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameProfileEditerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameProfileEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
