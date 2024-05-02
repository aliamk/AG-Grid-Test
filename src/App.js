import './App.css';

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "ag-grid-enterprise"

import { useState } from 'react';

import TokenFetcher from './TokenFetcher';
import LimitedPartnersGrid from './LimitedPartnersGrid';

function App() {

  // const username = process.env.REACT_APP_USERNAME;
  // const password = process.env.REACT_APP_PASSWORD;

  // const [token, setToken] = useState('');

  // const handleTokenFetch = (newToken) => {
  //   setToken(newToken);
  // };

      const [rowData, setRowData] = useState([
        { name: "New Jersey Division of Investment", domicile: "Trenton, United States", companyType: 'Pension Fund (Public)', companyCurrency: 'USD', totalFundCommitments: '178', totalFundCommitmentsUSD: '23,337.57', totalSeparateAccounts: '21', aumLocal: '76,704.00', aumUSD: '9,807.76'    },
        { name: "Hong Kong Jockey Club", domicile: "Hong Kong, Hong Kong", companyType: 'Foundation', companyCurrency: 'HKD', totalFundCommitments: '3', totalFundCommitmentsUSD: '0.00', totalSeparateAccounts: '0', aumLocal: '76,704.00', aumUSD: '9,807.76' },
        { name: "Toyota", domicile: "Corolla", companyType: 29600, companyCurrency: false },
      ]);
      
       /* Column Definitions: Defines the columns to be displayed. */
      const [colDefs, setColDefs] = useState([
        { headerName: 'Name', field: 'name' },
        { headerName: 'Domicile', field: 'domicile' },
        { headerName: 'Company Type', field: 'companyType' },
        { headerName: 'Company Currency', field: 'companyCurrency' },
        { headerName: 'Total Fund Commitments', field: 'totalFundCommitments' },
        { headerName: 'Total Fund Commitments (USD m)', field: 'totalFundCommitmentsUSD' },
        { headerName: 'Total Separate Accounts', field: 'totalSeparateAccounts' },
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
      return (
        <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs}/>
        {/* {<TokenFetcher username={username} password={password} onDataFetch={handleTokenFetch} /> }
      {token && <LimitedPartnersGrid token={token} />}  */}
        </div>
  );
}

export default App;
