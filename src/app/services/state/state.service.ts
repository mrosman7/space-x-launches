import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../../interfaces/app-state-interface';
import { Launch } from '../../interfaces/launch-interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private initialState: AppState = {
    data: [],
    isLoading: false
  };

  private stateSubject = new BehaviorSubject(this.initialState);
  state$ = this.stateSubject.asObservable();

  constructor() { }

  // using Partial as a way to update all or some of the state vs using AppState which would
  // require passing the entire state Object every time we update
  updateState(newState: Partial<typeof this.initialState>) {
    const currentState = this.stateSubject.value;
    this.stateSubject.next({ ...currentState, ...newState });  // spread operator to combine currentState and newState
  }

  // method to search for a specific flight launch in Launches[] for popup component 
  getLaunch(flight: number) {
    const launchesList = this.stateSubject.value.data;
    if (launchesList !== null ) {
      return launchesList.find((dict) => dict.flight_number === flight);
    } else {
      return console.log('Launches list is empty')
    }
  }
}
