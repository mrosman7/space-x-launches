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
});
