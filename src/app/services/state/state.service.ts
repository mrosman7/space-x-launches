import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../../interfaces/app-state-interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  // Setting up initial AppState
  private initialState: AppState = {
    data: [],
    isLoading: false
  };
  private stateSubject = new BehaviorSubject(this.initialState);
  state$ = this.stateSubject.asObservable();

  // setting up state of launch images to be used in Images Component 
  private imagesState: { [key: number]: string } = {};
  private imageStateSubject = new BehaviorSubject(this.imagesState);
  imagesState$ = this.imageStateSubject.asObservable();

  constructor() { };

  // using Partial as a way to update all or some of the state vs using AppState which would
  // require passing the entire state Object every time we update
  updateState(newState: Partial<typeof this.initialState>) {
    const currentState = this.stateSubject.value;
    this.stateSubject.next({ ...currentState, ...newState });  // spread operator to combine currentState and newState
  }

  updateImagesState(newImagesState: string[]) {
    const currentImageState = this.imageStateSubject.value;
    this.imageStateSubject.next({...currentImageState, ...newImagesState});
  }

  // method to search for a specific flight launch in Launches[] for popup component 
  getLaunch(flight: number) {
    const launchesList = this.stateSubject.value.data;
    if (launchesList !== null ) {
      return launchesList.find((dict) => dict.flight_number === flight);
    } else {
      return console.log('Launches list is empty')
    };
  };
};
