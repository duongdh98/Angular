import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentComponentComponent } from './child-parent-component.component';

describe('ChildParentComponentComponent', () => {
  let component: ChildParentComponentComponent;
  let fixture: ComponentFixture<ChildParentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildParentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
