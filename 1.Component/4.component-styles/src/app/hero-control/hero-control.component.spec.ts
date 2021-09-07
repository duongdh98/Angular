import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroControlComponent } from './hero-control.component';

describe('HeroControlComponent', () => {
  let component: HeroControlComponent;
  let fixture: ComponentFixture<HeroControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
