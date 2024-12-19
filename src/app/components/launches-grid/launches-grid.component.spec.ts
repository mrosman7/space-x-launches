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
    // TODO: write test
  });

  it('should close popup when close button is clicked', () => {
    // TODO: write test
  });

  it('should update the state of the cell that was clicked', () => {
    // TODO: write test
  });

  it('should update the states of the images for the cell that was clicked', () => {
    // TODO: write test
  });

  it('should return false if the list of images is less than 1', () => {
    // TODO: write test
  });

  it('should return true if the list of images is greater than 1', () => {
    // TODO: write test
  });
});
