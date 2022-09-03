import React,{useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { EmployeeAdd } from '../employee/pages'
import { AllEmployeesPage } from '../employee/pages/AllEmployeesPage'
import { EmployeePage } from '../employee/pages/EmployeePage'
import { getLoadingEmployee } from '../store'

export const AppRouter = () => {

    const dispatch = useDispatch();
   
    useEffect(() => {
      
        dispatch(getLoadingEmployee())
    
    }, [dispatch])
    

    return (
        <>
            <div>

                <Routes>
                    <Route path='/' element={<AllEmployeesPage />} />
                    <Route path='employee/:id' element={<EmployeePage />} />
                    <Route path='/createEmployee' element={<EmployeeAdd />} />


                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </div>
        </>
    )
}
