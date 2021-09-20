import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMiddleComponent } from './hello-middle.component';

describe('HelloMiddleComponent', () => {
  let component: HelloMiddleComponent;
  let fixture: ComponentFixture<HelloMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
