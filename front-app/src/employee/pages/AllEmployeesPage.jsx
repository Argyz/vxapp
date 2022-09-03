import React from 'react'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
import { EmployeeTable } from '../components'
import { useDispatch } from 'react-redux'

export const AllEmployeesPage = () => {

    
    
    return (
        <>
            <h2>Employees</h2>
            <hr />

            <EmployeeTable />

            <Button
                variant="outlined"
                sx={{ mt: 3, mb: 3 }}
                
            >
                <Link 
                    to='/createEmployee' 
                    style={{ textDecoration: 'none' }}
                    >
                        Add Employee
                </Link>
                
            </Button>
        </>
    )
}
