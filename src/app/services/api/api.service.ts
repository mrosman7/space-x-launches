import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getLaunchesInfo() {
    // Update state to isLoading while result is fetched
    this.stateService.updateState({isLoading: true});
    console.log('state is updating to ', this.stateService);

    const launchesURL: string = 'https://api.spacexdata.com/v5/launches'
    this.http.get<ApiResponse[]>(launchesURL).subscribe(
      (response) => {
        const launches: Launch[] = response.map(item => ({
          flight_number: item.flight_number,
          launchYear: Number(item.date_utc.slice(0,4)),
          rocketName: item.name,
          details: item.details,
          presskit: item.presskit,
          webcast: item.webcast,
          youtube_id: item.youtube_id,
          article: item.article,
          wikipedia: item.wikipedia
        }));

        // update state post API call
        this.stateService.updateState({ data: launches, isLoading: false });
    },
    (error) => {
      console.log('Error fetching launches: ', error);
      this.stateService.updateState({isLoading: false});
    }
  );
}
}
