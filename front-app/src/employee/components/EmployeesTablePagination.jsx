import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { 
        field: 'id', 
        headerName: 'employee_id', 
        width: 90 
    },
    {
        field: 'first_name',
        headerName: 'first_name',
        width: 150,
        editable: false,
    },
    {
        field: 'last_name',
        headerName: 'last_name',
        width: 110,
        editable: false,
    },
    {
        field: 'email',
        headerName: 'email',
        width: 110,
        editable: false,
    },
    {
        field: 'phone_number',
        headerName: 'phone_number',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'hire_date',
        headerName: 'hire_date',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'job_id',
        headerName: 'job_id',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'salary',
        headerName: 'salary',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'commission_pct',
        headerName: 'commission_pct',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'manager_id',
        headerName: 'manager_id',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'department_id',
        headerName: 'department_id',
        type: 'number',
        width: 110,
        editable: false,
    },
];

export const EmployeesTablePagination = ({ employeesSearch,page,limit}) => {


    const rows = employeesSearch.map( emp => ({
        id:emp.employee_id,
        first_name:emp.first_name,
        last_name:emp.last_name,
        email:emp.email,
        phone_number:emp.phone_number,
        hire_date:(emp.hire_date).slice(0,-14),
        job_id:emp.job_id,
        salary:emp.salary,
        commission_pct:emp.commission_pct,
        manager_id:emp.manager_id,
        department_id:emp.department_id,

    }))
    
    return (
        <>
            
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </>
    );
}