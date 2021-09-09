import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEdittorComponent } from './name-edittor.component';

describe('NameEdittorComponent', () => {
  let component: NameEdittorComponent;
  let fixture: ComponentFixture<NameEdittorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameEdittorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEdittorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
