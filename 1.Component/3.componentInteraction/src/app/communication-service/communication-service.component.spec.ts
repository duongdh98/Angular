import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationServiceComponent } from './communication-service.component';

describe('CommunicationServiceComponent', () => {
  let component: CommunicationServiceComponent;
  let fixture: ComponentFixture<CommunicationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
