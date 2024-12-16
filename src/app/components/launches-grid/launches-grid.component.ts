import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launch } from '../../interfaces/launch-interface';
import { ApiService } from '../../services/api/api.service';
import { StateService } from '../../services/state/state.service';
import { MediaPopupComponent } from '../media-popup/media-popup.component';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-launches-grid',
  imports: [AgGridAngular, MediaPopupComponent, CommonModule],
  templateUrl: './launches-grid.component.html',
  styleUrl: './launches-grid.component.css'
})
export class LaunchesGridComponent {
  launches$!: Observable<Launch[]>;
  isLoading$!: Observable<boolean>;
  rowData: Launch[] = [];
  pagination = true;
  paginationPageSize = 25;
  paginationPageSizeSelector = [25, 50, 75, 100];
  showPopup: boolean = false;
  eventData!: Launch | void;
  imagesAvailable: boolean = false;

  constructor(
    private stateService: StateService,
    private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLaunchesInfo();

    // creating launches and isLoading Observables for clarity
    this.launches$ = this.stateService.state$.pipe(
      map(state => state.data || [])
    );
    this.isLoading$ = this.stateService.state$.pipe(
      map(state => state.isLoading)
    );
  }


  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { headerName: "Rocket Name", field: "rocketName", filter: true},
    { headerName: "Flight Number", field: "flight_number", filter: true},
    { headerName: "Launch Year", field: "launchYear", filter: true},
    { field: "details", filter: true, autoHeight: true, wrapText: true, width: 750}
  ];

  toggleShowPopup() {
    this.showPopup = !this.showPopup;
  }

  areImagesAvailable(event: any) {
    if (event.data.missionImages < 1) {
      this.imagesAvailable = false;
    } else{
      this.imagesAvailable = true;
    }
  }

  onCellClicked(event: any) {
    this.toggleShowPopup()
    this.areImagesAvailable(event);
    //getting launch via state service and updating the state of the images
    this.eventData = this.stateService.getLaunch(event.data.flight_number);
    this.stateService.updateImagesState(event.data.missionImages);

    const popup = document.createElement('div');
    // const popupComponent = new MediaPopupComponent();
    document.body.appendChild(popup);
  }
}
