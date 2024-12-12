import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
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
        [paginationPageSizeSelector]="paginationPageSizeSelector"/>
  `,
  styleUrl: './launches-grid.component.css'
})
export class LaunchesGridComponent {

  launches: Object[] = [];

  private apiService = inject(ApiService);
  pagination = true;
  paginationPageSize = 25;
  paginationPageSizeSelector = [25, 50, 75, 100];

  ngOnInit(): void {
    this.getLaunchesData();
  }

  getLaunchesData() {
    this.apiService.getLaunchesInfo().subscribe((res: any) => {
      console.log(res);
    })
  }

  // Placeholder Row Data: The data to be displayed.
  rowData = [
    { flightNumber: sampleData[0]["flight_number"], launchYear: sampleData[0]["date_utc"], rocketName: sampleData[0]["rocket"], details: sampleData[0]["details"]},
    { flightNumber: sampleData[0]["rocket"], launchYear: sampleData[0]["date_utc"], rocketName: sampleData[0]["rocket"], details: sampleData[0]["details"]},
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "flightNumber", filter: true, floatingFilter: true},
    { field: "launchYear", filter: true, floatingFilter: true},
    { field: "rocketName", filter: true, floatingFilter: true},
    { field: "details", filter: true, floatingFilter: true}
  ];

}
