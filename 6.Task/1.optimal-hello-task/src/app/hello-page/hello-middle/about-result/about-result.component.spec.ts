import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutResultComponent } from './about-result.component';

describe('AboutResultComponent', () => {
  let component: AboutResultComponent;
  let fixture: ComponentFixture<AboutResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
