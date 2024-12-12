import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launches } from '../interfaces/launch-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http: HttpClient = inject(HttpClient);

  constructor() { }

  getLaunchesInfo(): Observable<Object> {
    const launchesURL: string = 'https://api.spacexdata.com/v5/launches'
    return this.http.get<Object>(launchesURL);
  }

}
