import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
import { EmployeeTable } from '../components'
import { getLoadingEmployee } from '../../store'



export const AllEmployeesPage = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        
        dispatch(getLoadingEmployee())
    
    }, [dispatch])

    return (
        <>
            <h2>Employees</h2>
            <hr />

            <EmployeeTable />

            <Button
                variant="contained"
                sx={{ mt: 3, mb: 3, ml:3, padding:2}}
                
            >
                <Link
                    
                    style={{
                        color:'#fff',
                        textDecoration:'none',
                    }}
                    to='/createEmployee' 
                    >
                        Add Employee
                </Link>
                
            </Button>
        </>
    )
}
