import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response';
import { Launch } from '../../interfaces/launch-interface';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor (
    private stateService: StateService,
    private http: HttpClient
  ) { }

  // TODO: error is logged to console for now. In the future make sure this error is rendered for users
  // handleError function from Angular documentation: https://v17.angular.io/guide/http-handle-request-errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('We have encountered an error. Please try again later'));
  }

  getLaunchesInfo() {
    // Update state to isLoading while result is fetched
    this.stateService.updateState({isLoading: true});

    const launchesURL: string = 'https://api.spacexdata.com/v5/launches'
    this.http.get<ApiResponse[]>(launchesURL)
    .pipe(
      retry(3), // allow to retry three times before throwing error
      catchError(this.handleError)
    )
    .subscribe(
      (response) => {
        const launches: Launch[] = response.map(item => ({
          flight_number: item.flight_number,
          launchYear: Number(item.date_utc.slice(0,4)),
          rocketName: item.name,
          details: item.details,
          presskit: item.links.presskit,
          webcast: item.links.webcast,
          wikipedia: item.links.wikipedia,
          redditCampaign: item.links.reddit.campaign,
          redditLaunch: item.links.reddit.launch,
          redditMedia: item.links.reddit.media,
          redditRecovery: item.links.reddit.recovery,
          missionImages: item.links.flickr.original
        }));

        // update state post API call
        this.stateService.updateState({ data: launches, isLoading: false });
    },
  );
};
};
