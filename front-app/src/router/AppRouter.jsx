import React,{useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { EmployeeAdd, EmployeeSearch } from '../employee/pages'
import { AllEmployeesPage } from '../employee/pages/AllEmployeesPage'
import { EmployeePage } from '../employee/pages/EmployeePage'
import { getLoadingEmployee } from '../store'

import {NavBar} from '../layout';

export const AppRouter = () => {

    const dispatch = useDispatch();
   
    useEffect(() => {
      
        dispatch(getLoadingEmployee())
    
    }, [dispatch])
    

    return (
        <>
            
            <NavBar />
            
            <div>
                
                <Routes>
                    <Route path='/' element={<AllEmployeesPage />} />
                    <Route path='employee/:id' element={<EmployeePage />} />
                    <Route path='/createEmployee' element={<EmployeeAdd />} />
                    <Route path='/search' element={<EmployeeSearch />} />

                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </div>
        </>
    )
}
