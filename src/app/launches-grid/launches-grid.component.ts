import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, GridReadyEvent } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ApiService } from '../api/api.service';
import { sampleData } from '../constants/sampleData';
import { Launches } from '../interfaces/launch-interface';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-launches-grid',
  imports: [AgGridAngular],
  template: `
    <ag-grid-angular
    class="ag-theme-quartz" style="height: 500px;"
        [rowData]="rowData"
        [columnDefs]="colDefs"
        [pagination]="pagination"
        [paginationPageSize]="paginationPageSize"
        [paginationPageSizeSelector]="paginationPageSizeSelector"
        (gridReady)="onGridReady($event)"
        />
  `,
  styleUrl: './launches-grid.component.css'
})
export class LaunchesGridComponent {

  launches: Object[] = [];
  rowData: any = []

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "name", filter: true, floatingFilter: true},
    { field: "flight_number", filter: true, floatingFilter: true},
    { field: "date_utc", filter: true, floatingFilter: true},
    { field: "rocket", filter: true, floatingFilter: true},
    { field: "details", filter: true, floatingFilter: true}
  ];

  private apiService = inject(ApiService);
  pagination = true;
  paginationPageSize = 25;
  paginationPageSizeSelector = [25, 50, 75, 100];

  ngOnInit(): void {
    this.onGridReady();
  }

  onGridReady() {
    this.apiService.getLaunchesInfo().subscribe(data => this.rowData = data)
  }
}
