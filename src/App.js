import './App.css';
import jsonData from './data.json';
import fundsData from './funds.json';

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "ag-grid-community/styles/ag-theme-balham.css"; // Optional Theme applied to the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional Theme applied to the grid

import "ag-grid-enterprise"
import "ag-grid-charts-enterprise";
import {
  ColDef,
  ColGroupDef,
  FirstDataRenderedEvent,
  GridApi,
  GridOptions,
  ModuleRegistry,
  createGrid,
} from "@ag-grid-community/core";
import { Grid } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ChartsEnterpriseModule } from '@ag-grid-enterprise/charts-enterprise';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';


import { useState, useEffect } from 'react';

// import TokenFetcher from './TokenFetcher';

  // const username = process.env.REACT_APP_USERNAME;
  // const password = process.env.REACT_APP_PASSWORD;

const enableCharts = true;
const enableRangeSelection = true;

const TableComponent1 = () => {
      const [rowData, setRowData] = useState([]);

      useEffect(() => {
          setRowData(jsonData.limitedPartners);
      }, []);

       /* Column Definitions: Defines the columns to be displayed. */
      const [columnDefs, setColumnDefs] = useState([
        { headerName: 'Name', field: 'name' },
        { headerName: 'Domicile', field: 'domicile', chartDataType: 'category' },
        { headerName: 'Company Type', field: 'companyType', chartDataType: 'category' },
        { headerName: 'Company Currency', field: 'currency', chartDataType: 'category' },
        { headerName: 'Total Fund Commitments', field: 'totalFundCommitments', chartDataType: 'series' },
        { headerName: 'Total Fund Commitments (USD m)', field: 'totalFundCommitmentsUSD', chartDataType: 'series' },
        { headerName: 'Total Separate Accounts', field: 'totalSeparateAccounts', chartDataType: 'series' },
        { headerName: 'AUM (Local Currency m)', field: 'aumLocal' },
        { headerName: 'AUM (USD m)', field: 'aumUSD' },
        { headerName: 'RE Current Allocation (%)', field: 'reTargetAllocationToPercentage' },
        { headerName: 'RE Current Allocation', field: 'reTargetAllocationFromLocal' },
        { headerName: 'RE Target Allocation (%)', field: 'reTargetAllocationFromPercentage' },
        { headerName: 'RE Target Allocation', field: 'reTargetAllocationFromLocal' },
        { headerName: 'INFRA Current Allocation (%)', field: 'infraCurrentAllocationFromPercentage' },
        { headerName: 'INFRA Current Allocation', field: 'infraCurrentAllocationFromLocal' },
        { headerName: 'INFRA Target Allocation (%)', field: 'infraTargetAllocationFromPercentage' },
        { headerName: 'INFRA Target Allocation', field: 'infraTargetAllocationFromLocal' },
        { headerName: 'Typical Investment Size Value - Lower End (Local Currency)', field: 'typicalInvestmentSizeValueLowerEndLocalCurrency' },
        { headerName: 'Typical Investment Size Value - Higher End (Local Currency)', field: 'typicalInvestmentSizeValueHigherEndLocalCurrency' },
        { headerName: 'Co-Investment Attitude', field: 'coInvestmentAttitude' },
        { headerName: 'Direct Investments Attitude', field: 'directInvestmentsAttitude' },
        { headerName: 'New Manager Attitude', field: 'newManagerAttitude' },
        { headerName: 'Separate Account Attitude', field: 'separateAccountAttitude' },
        { headerName: 'Sector Inclinations', field: 'sectorInclinations' },
        { headerName: 'Geographic Inclinations', field: 'geographicInclinations' },
        { headerName: 'Advisers', field: 'advisers' },
        { headerName: 'Immediate Subsidiary', field: 'immediateSubsidiary' },
        { headerName: 'Immediate Parent', field: 'immediateParent' },
        { headerName: 'Ultimate Parent', field: 'ultimateParent' },
        { headerName: 'Year Founded', field: 'yearFounded' },
        { headerName: 'Website', field: 'website' },
        { headerName: 'Corporate Email', field: 'corporateEmail' },
        { headerName: 'Main Address', field: 'mainAddress' },
      ]);

      const defaultColDef = {
        filter: true,
        minWidth: 100,
      };

      return (
        <div className="ag-theme-quartz-auto-dark" style={{ height: 500, marginTop: 10, marginRight: 20, marginBottom: 80, marginLeft: 20 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={defaultColDef} pagination={true} paginationPageSize={15} enableCharts={enableCharts} enableRangeSelection={enableRangeSelection} />
        </div>
  );
}


const TableComponent2 = () => {
      const [rowData, setRowData] = useState([]);

      useEffect(() => {
          setRowData(fundsData.funds);
      }, []);

       /* Column Definitions: Defines the columns to be displayed. */
      const [columnDefs, setColumnDefs] = useState([
        { headerName: 'Name', field: 'name' },
        { headerName: 'General Partners', field: 'generalPartners', chartDataType: 'category' },
        { headerName: 'Asset Class', field: 'assetClass', chartDataType: 'category' },
        { headerName: 'Status', field: 'status', chartDataType: 'category' },
        { headerName: 'Latest Event', field: 'latestEvent', chartDataType: 'category' },
        { headerName: 'Latest Event Date', field: 'latestEventDate', chartDataType: 'category' },
        { headerName: 'Currency', field: 'currency', chartDataType: 'category' },
        { headerName: 'Initial Target Size Local', field: 'initialTargetSizeLocal', chartDataType: 'series' },
        { headerName: 'Initial Target Size USD', field: 'initialTargetSizeUSD', chartDataType: 'series' },
        { headerName: 'Target Size Local', field: 'targetSizeLocal', chartDataType: 'series' },
        { headerName: 'Target Size Local USD', field: 'targetSizeUSD', chartDataType: 'series' },
        { headerName: 'Hard Cap Local', field: 'hardCapLocal', chartDataType: 'series' },
        { headerName: 'Hard Cap Local USD', field: 'hardCapLocalUSD', chartDataType: 'series' },
        { headerName: 'Target Net IRR Minimum', field: 'targetNetIRRMinimum', chartDataType: 'series' },

      ]);

      const defaultColDef = {
        filter: true,
        minWidth: 100,
      };

      return (
        <div className="ag-theme-material-dark" style={{ height: 500, marginLeft: 20, marginRight: 20 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={defaultColDef} pagination={true} paginationPageSize={15} enableCharts={enableCharts} enableRangeSelection={enableRangeSelection} />
        {/* <div></div> */}
        </div>
  );
}


const App = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Table 1</h2>
      <TableComponent1 />
      <h2 style={{ textAlign: 'center' }}>Table 2</h2>
      <TableComponent2 />
    </div>
  );
}

export default App;
