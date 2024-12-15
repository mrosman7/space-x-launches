import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, RowSpanParams } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launch } from '../interfaces/launch-interface';
import { MediaPopupComponent } from '../media-popup/media-popup.component';
import { ApiService } from '../services/api/api.service';
import { StateService } from '../services/state/state.service';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-launches-grid',
  imports: [AgGridAngular, MediaPopupComponent, CommonModule],
  template: ` 
    <ag-grid-angular
    class="ag-theme-quartz" style="height: 500px;"
        [rowData]="launches$ | async"
        [columnDefs]="colDefs"
        [pagination]="pagination"
        [paginationPageSize]="paginationPageSize"
        [paginationPageSizeSelector]="paginationPageSizeSelector"
        (cellClicked)="onCellClicked($event)"
        />
        <app-media-popup 
        [showPopup] = "showPopup"
        [eventData] = "eventData"
        ></app-media-popup>
  `,
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

  onCellClicked(event: any) {
    this.toggleShowPopup()
    this.eventData = this.stateService.getLaunch(event.data.flight_number);
    const popup = document.createElement('div');
    popup.innerHTML = `<app-cell-popup [data]="data"></app-cell-popup>`;
    const popupComponent = new MediaPopupComponent();

    document.body.appendChild(popup);
  }

}
