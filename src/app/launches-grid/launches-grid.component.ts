import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-quartz.css';


ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-launches-grid',
  imports: [AgGridAngular],
  template: `
    <ag-grid-angular
    class="ag-theme-quartz" style="height: 500px;"
        [rowData]="rowData"
        [columnDefs]="colDefs" />
  `,
  styleUrl: './launches-grid.component.css'
})
export class LaunchesGridComponent {
      // Placeholder Row Data: The data to be displayed.
      rowData = [
        { flightNumber: "TBD", launchYear: "TBD", rocketName: "TBD", details: true },
        { flightNumber: "TBD", launchYear: "TBD", rocketName: "TBD", details: false },
        { flightNumber: "TBD", launchYear: "TBD", rocketName: "TBD", details: false },
    ];

    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef[] = [
        { field: "flightNumber" },
        { field: "launchYear" },
        { field: "rocketName" },
        { field: "details" }
    ];

}