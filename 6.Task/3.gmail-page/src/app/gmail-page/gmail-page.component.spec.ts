import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailPageComponent } from './gmail-page.component';

describe('GmailPageComponent', () => {
  let component: GmailPageComponent;
  let fixture: ComponentFixture<GmailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
