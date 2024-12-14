import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../../interfaces/app-state-interface';
import { Launch } from '../../interfaces/launch-interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private initialState: AppState = {
    data: null as Launch[] | null,
    isLoading: false
  };

  private stateSubject = new BehaviorSubject(this.initialState);
  state$ = this.stateSubject.asObservable();

  constructor() { }

  // using Partial as a way to update all or some of the state vs using AppState which would
  // require passing the entire state Object every time we update
  updateState(newState: Partial<typeof this.initialState>) {
    const currentState = this.stateSubject.value;
    // spread operator to combine currentState and newState
    this.stateSubject.next({ ...currentState, ...newState });
  }

  

}
