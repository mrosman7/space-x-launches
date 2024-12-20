import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPopupComponent } from './media-popup.component';

describe('MediaPopupComponent', () => {
  let component: MediaPopupComponent;
  let fixture: ComponentFixture<MediaPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close popup when onClick event receieved', () => {
    // TODO: write test
  });
});
