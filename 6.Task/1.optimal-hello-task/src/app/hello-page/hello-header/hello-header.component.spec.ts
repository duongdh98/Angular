import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloHeaderComponent } from './hello-header.component';

describe('HelloHeaderComponent', () => {
  let component: HelloHeaderComponent;
  let fixture: ComponentFixture<HelloHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
