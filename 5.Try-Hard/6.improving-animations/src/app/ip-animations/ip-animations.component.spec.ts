import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAnimationsComponent } from './ip-animations.component';

describe('IpAnimationsComponent', () => {
  let component: IpAnimationsComponent;
  let fixture: ComponentFixture<IpAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
