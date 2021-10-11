import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailRoutingComponent } from './account-detail-routing.component';

describe('AccountDetailRoutingComponent', () => {
  let component: AccountDetailRoutingComponent;
  let fixture: ComponentFixture<AccountDetailRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
