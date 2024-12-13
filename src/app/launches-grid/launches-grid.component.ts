import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ApiService } from '../api/api.service';
import { MediaPopupComponent } from '../media-popup/media-popup.component';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-launches-grid',
  imports: [AgGridAngular, MediaPopupComponent],
  template: ` 
    <ag-grid-angular
    class="ag-theme-quartz" style="height: 500px;"
        [rowData]="rowData"
        [columnDefs]="colDefs"
        [pagination]="pagination"
        [paginationPageSize]="paginationPageSize"
        [paginationPageSizeSelector]="paginationPageSizeSelector"
        (gridReady)="onGridReady()"
        (cellClicked)="onCellClicked($event)"
        />
        <app-media-popup 
        [showPopup] = "showPopup"
        ></app-media-popup>
  `,
  styleUrl: './launches-grid.component.css'
})
export class LaunchesGridComponent {

  launches: Object[] = [];
  rowData: any = []
  private apiService = inject(ApiService);
  pagination = true;
  paginationPageSize = 25;
  paginationPageSizeSelector = [25, 50, 75, 100];
  public groupDefaultExpanded = 1;
  testing = "Hello World"
  showPopup: boolean = false;


  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { headerName: "Flight Number", field: "flight_number", filter: true},
    { headerName: "Launch Year", field: "date_utc", filter: true, valueFormatter: params => { return params.value.slice(0,4); }},
    { headerName: "Rocket Name", field: "name", filter: true},
    { field: "details", filter: true}
  ];

  ngOnInit(): void {
    this.onGridReady();
  }

  onGridReady() {
    this.apiService.getLaunchesInfo().subscribe(data => this.rowData = data)
  }

  toggleShowPopup() {
    this.showPopup = !this.showPopup;
  }

  onCellClicked(event: any) {
    this.toggleShowPopup()
    const popup = document.createElement('div');
    popup.innerHTML = `<app-cell-popup [data]="data"></app-cell-popup>`;
    const popupComponent = new MediaPopupComponent();

    document.body.appendChild(popup);
  }

}
