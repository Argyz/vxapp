import React from 'react'
import { Button,TableCell,TableRow } from '@mui/material';
import { Link } from 'react-router-dom';



export const EmployeeList = ({ employee }) => {


    

    return (
        <>

            <TableRow
                
                sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                }}
            >
                <TableCell component="th" scope="row" align='center'>
                    {employee.employee_id}
                </TableCell>
                <TableCell align='center'>{employee.first_name}</TableCell>
                <TableCell align='center'>{employee.last_name}</TableCell>
                <TableCell align='center'>{employee.email}</TableCell>
                <TableCell align='center'>{employee.phone_number}</TableCell>
                <TableCell align='center'>{(employee.hire_date).slice(0, -14)}</TableCell>
                <TableCell align='center'>{employee.job_id}</TableCell>
                <TableCell align='center'>${employee.salary}</TableCell>
                <TableCell align='center'>{employee.commission_pct}</TableCell>
                <TableCell align='center'>{employee.manager_id}</TableCell>
                <TableCell align='center'>{employee.department_id}</TableCell>
                <TableCell align='center'>
                    <Button>
                        <Link
                        style={{
                            textDecoration:'none',
                        }} 
                        to={`/employee/${employee.employee_id}`}>Details...</Link>
                    </Button>
                </TableCell>

            </TableRow>

        </>
    )
}

