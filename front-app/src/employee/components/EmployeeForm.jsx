import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks/useForm';

import { validation } from '../../validation/validation';
export const EmployeeForm = (props) => {

    let errors = {};

    const [dateValue, setDateValue] = useState(false)

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
    const [errorJobId, setErrorJobId] = useState(false);
    const [errorSalary, setErrorSalary] = useState(false);
    const [errorManagerId, setErrorManagerId] = useState(false);
    const [errorDepartmentId, setErrorDepartmentId] = useState(false);


    const { submit, formName, formUpdate, activeEmployee } = props;

    const navigate = useNavigate();

    const {
        first_name = formUpdate ? activeEmployee.first_name : "",
        last_name = formUpdate ? activeEmployee.last_name : "",
        email = formUpdate ? activeEmployee.email : "",
        phone_number = formUpdate ? activeEmployee.phone_number : "",
        hire_date = formUpdate ? (activeEmployee.hire_date).slice(0, -14) : "",
        job_id = formUpdate ? activeEmployee.job_id : "",
        salary = formUpdate ? activeEmployee.salary : "",
        commission_pct = formUpdate ? activeEmployee.commission_pct : "",
        manager_id = formUpdate ? activeEmployee.manager_id : "",
        department_id = formUpdate ? activeEmployee.department_id : "",
        formState,
        onInputChange } = useForm();


    const onSubmitHandler = (e) => {

        e.preventDefault();

        if (formName==='Update') {
            errors=validation({
                email,
                phone_number,
                job_id,
                salary,
                manager_id,
                department_id,
            })
        }else{

            errors = validation(formState);
        }

        if (!(errors.email &&
            errors.phoneNumber &&
            errors.jobId &&
            errors.salary &&
            errors.managerId &&
            errors.departmentId)) {

                if (!(errors.email)) {
                    
                    setErrorEmail(true);
                }
                if (!(errors.phoneNumber)) {
                    
                    setErrorPhoneNumber(true);
                }
                if (!(errors.jobId)) {
                    
                    setErrorJobId(true);
                }
                if (!(errors.salary)) {
                    
                    setErrorSalary(true);
                }
                if (!(errors.managerId)) {
                    
                    setErrorManagerId(true);
                }
                if (!(errors.departmentId)) {
                    
                    setErrorDepartmentId(true);
                }

            return
        }

        submit(formState);

        navigate("/");
    }

    const onNavigateBack = () => {
        navigate(-1)
    }

    const focusDateHandler = () => {
        setDateValue(true);
    }

    const blurDateHandler = () => {
        setDateValue(false);
    }

    return (

        <form onSubmit={onSubmitHandler}>

            <Typography variant='h4' sx={{ mt: 10, mb: 3 }}>
                {formName}
            </Typography>

            <Divider />

            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}

            >
                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        label="FirstName"
                        type="text"
                        required
                        placeholder='First Name'
                        fullWidth
                        name='first_name'
                        onChange={onInputChange}
                        value={first_name}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>

                    <TextField
                        label="LastName"
                        type="text"
                        required
                        placeholder='Last Name'
                        fullWidth
                        name='last_name'
                        onChange={onInputChange}
                        value={last_name}

                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>

                    <TextField
                        error={errorEmail}
                        label="Email"
                        type="email"
                        helperText={`${errorEmail ? 'Incorrect Email' : ''}`}
                        required
                        placeholder='Correo@google.com'
                        fullWidth
                        name='email'
                        onChange={onInputChange}
                        value={email}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        error={errorPhoneNumber}
                        label="PhoneNumber"
                        type="tel"
                        helperText={`${errorPhoneNumber ? 'Only Numbers' : ''}`}
                        required
                        placeholder='Phone Number'
                        fullWidth
                        name='phone_number'
                        onChange={onInputChange}
                        value={phone_number}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField

                        label="HireDate"
                        type={dateValue ? "date" : "text"}
                        required
                        placeholder='Hire Date'
                        fullWidth
                        name='hire_date'
                        onChange={onInputChange}
                        value={hire_date}
                        onFocus={focusDateHandler}
                        onBlur={blurDateHandler}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        error={errorJobId}
                        label="JobId"
                        type="text"
                        helperText={`${errorJobId ? 'Only Numbers' : ''}`}
                        required
                        placeholder='Job Id'
                        fullWidth
                        name='job_id'
                        onChange={onInputChange}
                        value={job_id}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        error={errorSalary}
                        label="Salary"
                        type="text"
                        helperText={`${errorSalary ? 'Only Numbers' : ''}`}
                        required
                        placeholder='Salary'
                        fullWidth
                        name='salary'
                        onChange={onInputChange}
                        value={salary}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField

                        label="CommissionPct"
                        type="text"
                        required
                        placeholder='Commission Pct'
                        fullWidth
                        name='commission_pct'
                        onChange={onInputChange}
                        value={commission_pct}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        error={errorManagerId}
                        label="ManagerId"
                        type="text"
                        helperText={`${errorManagerId ? 'Only Numbers' : ''}`}
                        required
                        placeholder='Manager Id'
                        fullWidth
                        name='manager_id'
                        onChange={onInputChange}
                        value={manager_id}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        error={errorDepartmentId}
                        label="DepartmentId"
                        type="text"
                        helperText={`${errorDepartmentId ? 'Only Numbers' : ''}`}
                        required
                        placeholder='Department Id'
                        fullWidth
                        name='department_id'
                        onChange={onInputChange}
                        value={department_id}
                    />
                </Grid>

            </Grid>

            <Button
                size='medium'
                sx={{ mt: 3, mb: 3 }}
                onClick={onNavigateBack}
            >
                Back
            </Button>
            <Button
                variant='contained'
                type="submit"
                color='success'
                size='medium'
                sx={{ mt: 3, mb: 3, padding: 1 }}

            >

                {formName}
            </Button>
        </form>
    )
}
