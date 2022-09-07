import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import {EmployeeList} from './EmployeeList';


export const EmployeeTable = () => {

    
    const { users = [] } = useSelector(state => state.employee);

    return (

        <>

            <TableContainer component={Paper}>
                <Table sx={{minWidth:650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'> Id </TableCell>
                            <TableCell align='center'> First Name </TableCell>
                            <TableCell align='center'> Last Name </TableCell>
                            <TableCell align='center'> Email </TableCell>
                            <TableCell align='center'> Phone Number </TableCell>
                            <TableCell align='center'> Hire Date </TableCell>
                            <TableCell align='center'> Job Id </TableCell>
                            <TableCell align='center'> Salary </TableCell>
                            <TableCell align='center'> Commission Pct </TableCell>
                            <TableCell align='center'> Manager Id </TableCell>
                            <TableCell align='center'> Department Id </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            users.map(emp => (
                                <EmployeeList key={emp.employee_id} employee={emp}/>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}
