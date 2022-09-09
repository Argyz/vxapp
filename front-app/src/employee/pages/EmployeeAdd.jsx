import React from 'react'
import { useDispatch } from 'react-redux';
import { startCreateUser } from '../../store/employee';
import { EmployeeForm } from '../components';

export const EmployeeAdd = () => {

    const dispatch = useDispatch();

    const createEmployee = (formState) => {

        dispatch(startCreateUser(formState));
    }

    return (

        <>
                
            <EmployeeForm submit={createEmployee} formName={"Add Employee"} />
            
        </>


    )
}