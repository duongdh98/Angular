import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFooterComponent } from './hello-footer.component';

describe('HelloFooterComponent', () => {
  let component: HelloFooterComponent;
  let fixture: ComponentFixture<HelloFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
