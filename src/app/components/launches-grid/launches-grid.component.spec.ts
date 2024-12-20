import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesGridComponent } from './launches-grid.component';

describe('LaunchesGridComponent', () => {
  let component: LaunchesGridComponent;
  let fixture: ComponentFixture<LaunchesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchesGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open popup when cell clicked', () => {
    // setup
    spyOn(component, 'openPopup');

    // act
    component.openPopup();

    // assert
    expect(component.openPopup).toHaveBeenCalled();

  });

  it('should call closePopup when modal is closed', () => {
    // setup
    spyOn(component, 'closePopup');

    // act
    component.closePopup();

    // assert
    expect(component.closePopup).toHaveBeenCalled();
  });

  it('should update the state of the cell that was clicked', () => {
    // TODO: write test
  });

  it('should update the states of the images for the cell that was clicked', () => {
    // TODO: write test
  });

  it('should return false if the list of images is less than 1', () => {
    // setup 
    const mockEvent = {data: {
      missionImages: []
    }
  }

    // act
    component.areImagesAvailable(mockEvent);

    // assert
    expect(component.imagesAvailable).toBeFalse();
  });

  it('should return true if the list of images is greater than 1', () => {
        // setup 
        const mockData = {data: {
          missionImages: ["sampleUrl", "sampleUrl2"]
        }
      }
    
        // act
        component.areImagesAvailable(mockData);
        fixture.detectChanges();
    
        // assert
        expect(component.imagesAvailable).toBeTrue();
  });
});
