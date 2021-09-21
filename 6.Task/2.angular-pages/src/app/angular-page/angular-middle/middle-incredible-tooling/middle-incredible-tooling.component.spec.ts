import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleIncredibleToolingComponent } from './middle-incredible-tooling.component';

describe('MiddleIncredibleToolingComponent', () => {
  let component: MiddleIncredibleToolingComponent;
  let fixture: ComponentFixture<MiddleIncredibleToolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleIncredibleToolingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleIncredibleToolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
