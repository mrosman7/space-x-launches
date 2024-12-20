import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ApiResponse } from '../../interfaces/api-response';
import { Launch } from '../../interfaces/launch-interface';
import { StateService } from '../state/state.service';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let stateService: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [
      ApiService,
      StateService
    ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
    stateService = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update state when call initiated'), () => {
    // act 
    service.getLaunchesInfo();

    // assert
    expect(stateService.updateState).toHaveBeenCalledOnceWith({isLoading: true})
  }

  it('should make a GET response to API endpoint', (() => {
    // setup
    let mockedApiResponse: ApiResponse = {     // mocked API response 
      flight_number: 1,
      date_utc: '2006-01-01T00:00:00Z',
      name: 'Test Name',
      details: 'test details',
      links: {
        presskit: 'https://testUrl.com',
        webcast: 'https://testUrl.com',
        wikipedia: 'https://testUrl.com',
        reddit: {
          campaign: 'https://testUrl.com',
          launch: 'https://testUrl.com',
          media: 'https://testUrl.com',
          recovery: 'https://testUrl.com'
        },
        flickr: {
          original: ['imagesURl']
        }
      }
    }

    /*
    // act
    service.getLaunchesInfo();

    // HTTP request 
    const req = httpMock.expectOne('https://api.spacexdata.com/v5/launches');
    expect(req.request.method).toBe('GET');
    req.flush(mockedApiResponse);  
    // the getLaunchesInfo doesn't return a response rather subscribes and transforms it to a Launch[]
    // TODO: Resolve the errors in this test

    // cleanup
    httpMock.verify();
    */
  }))

  it('should update the state of Launches after the API is called', () => {
    let mockedLaunches: Launch[] = [       // mocked launch created after API response received
      {
        flight_number: 1,
        rocketName: 'Test Name',
        launchYear: 2006,
        details: "test details",
        presskit: "https://testUrl.com",
        webcast: "https://testUrl.com",
        wikipedia: "https://testUrl.com",
        redditCampaign: "https://testUrl.com",
        redditLaunch : "https://testUrl.com",
        redditMedia: "https://testUrl.com",
        redditRecovery: "https://testUrl.com",
        missionImages: ["imagesURl"]
      }
    ]

    // TODO: write test to check state is updated after above API call test is resolved
  })

  it('should throw and error when the error status === 0', () => {
    // TODO: write test to check error
  });
});
