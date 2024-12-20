import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('update the state of the app when updateState is called', () => {
    // TODO: write test
  });

  it('update the state of Images when updateImagesState is called', () => {
    // TODO: write test
  });

  it('should get a single launch when getLaunch is called with flight number', () => {
    // TODO: write test
  });
});
