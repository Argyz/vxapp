import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Typography } from '@mui/material';

import { EmployeeForm } from '../components';
import { findData } from '../../helper/findData';
import { EmployeeCard } from '../components/EmployeeCard';
import { startActiveEmployee, startDeleteEmployee, startUploadEmployee } from '../../store/employee/thunk';
import { typography } from '@mui/system';


export const EmployeePage = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formUpdate, setFormUpdate] = useState(false);

    const { users = [] } = useSelector(state => state.employee);

    const activeEmployee = findData(users, id)

   
    useEffect(() => {
        dispatch(startActiveEmployee(id, activeEmployee))
    }, [id, users])

    const onNavigateBack = () => {
        navigate(-1);
    }

    const onDelete = () => {

        dispatch(startDeleteEmployee());
    }

    const changeStateUpload=()=>{

        setFormUpdate(true);
    }

    const onUpdate = (formState) => {
    
        dispatch(startUploadEmployee(formState))
        navigate(-1);

    }

    return (
        <>

            {
                (users.length === 0)
                    ? <Typography>Loading...</Typography>
                    : <EmployeeCard
                        activeEmployee={activeEmployee}
                        onNavigateBack={onNavigateBack}
                        onDelete={onDelete}
                        onUpdate={changeStateUpload}
                    />

            }

            {
                formUpdate && <EmployeeForm submit={onUpdate} formName={"Update"} activeEmployee={activeEmployee} formUpdate={formUpdate}/>
            }


        </>
    )
}
