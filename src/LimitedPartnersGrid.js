// LimitedPartnersGrid.js
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const LimitedPartnersGrid = ({ token }) => {
  console.log('Token: ', token);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
  const fetchLimitedPartners = async () => {
    try {
      const response = await fetch('/limited-partners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: '', page: 1 })
      });
      const data = await response.json();
      setRowData(data.limitedPartners); // assuming limitedPartners is an array of objects
    } catch (error) {
      console.error('Error fetching limited partners:', error);
    }
  };
  fetchLimitedPartners();
}, [token]);

const columnDefs = [
  { headerName: 'Name', field: 'name' },
  { headerName: 'Domicile', field: 'domicile' },
  { headerName: 'Company Type', field: 'companyType' },
  { headerName: 'Company Currency', field: 'companyCurrency' },
  { headerName: 'Total Fund Commitments', field: 'totalFundCommitments' },
  { headerName: 'Total Fund Commitments (USD m)', field: 'totalFundCommitmentsUSD' },
  { headerName: 'Total Separate Accounts', field: 'totalSeparateAccounts' },
  // Add more columns as needed
];

return (
  <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}
      pagination={true}
      paginationPageSize={10}
    />
  </div>
);
};

export default LimitedPartnersGrid;
