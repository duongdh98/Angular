import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPagesComponent } from './material-pages.component';

describe('MaterialPagesComponent', () => {
  let component: MaterialPagesComponent;
  let fixture: ComponentFixture<MaterialPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
