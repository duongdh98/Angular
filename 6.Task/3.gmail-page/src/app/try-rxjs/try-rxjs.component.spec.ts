import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryRxjsComponent } from './try-rxjs.component';

describe('TryRxjsComponent', () => {
  let component: TryRxjsComponent;
  let fixture: ComponentFixture<TryRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
