import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePictureItemComponent } from './google-picture-item.component';

describe('GooglePictureItemComponent', () => {
  let component: GooglePictureItemComponent;
  let fixture: ComponentFixture<GooglePictureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglePictureItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePictureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
