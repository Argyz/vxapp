import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
import { EmployeeTable } from '../components'
import { getLoadingEmployee } from '../../store'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const AllEmployeesPage = () => {


    const {messageSaved}=useSelector(state=>state.employee);

    const dispatch = useDispatch();
    
    useEffect(() => {
        
        dispatch(getLoadingEmployee())
    
    }, [dispatch])

    useEffect(()=>{
        if (messageSaved.length > 0) {
            Swal.fire('Accion completada con exito',messageSaved,'success');
        }
    },[messageSaved]);

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
