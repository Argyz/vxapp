import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks/useForm';

export const EmployeeForm = (props) => {
    
    
    const [dateValue, setDateValue] = useState(false)

    const { submit, formName, formUpdate, activeEmployee } = props;

    const navigate = useNavigate();

    const {
        first_name = formUpdate ? activeEmployee.first_name : "",
        last_name = formUpdate ? activeEmployee.last_name : "",
        email = formUpdate ? activeEmployee.email : "",
        phone_number = formUpdate ? activeEmployee.phone_number : "",
        hire_date = formUpdate ? (activeEmployee.hire_date).slice(0,-14) : "",
        job_id = formUpdate ? activeEmployee.job_id : "",
        salary = formUpdate ? activeEmployee.salary : "",
        commission_pct = formUpdate ? activeEmployee.commission_pct : "",
        manager_id = formUpdate ? activeEmployee.manager_id : "",
        department_id = formUpdate ? activeEmployee.department_id : "",
        formState,
        onInputChange } = useForm();



    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        submit(formState)

        navigate(-1)
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

            <Typography variant='h4' sx={{ mt: 3, mb: 3 }}>{formName}</Typography>

            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}

            >
                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        label="FirstName"
                        type="text"
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
                        placeholder='Last Name'
                        fullWidth
                        name='last_name'
                        onChange={onInputChange}
                        value={last_name}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        label="Email"
                        type="email"
                        placeholder='Correo@google.com'
                        fullWidth
                        name='email'
                        onChange={onInputChange}
                        value={email}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        label="PhoneNumber"
                        type="tel"
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
                        label="JobId"
                        type="text"
                        placeholder='Job Id'
                        fullWidth
                        name='job_id'
                        onChange={onInputChange}
                        value={job_id}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        label="Salary"
                        type="text"
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
                        placeholder='Commission Pct'
                        fullWidth
                        name='commission_pct'
                        onChange={onInputChange}
                        value={commission_pct}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        label="ManagerId"
                        type="text"
                        placeholder='Manager Id'
                        fullWidth
                        name='manager_id'
                        onChange={onInputChange}
                        value={manager_id}
                    />
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <TextField
                        label="DepartmentId"
                        type="text"
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
                type="submit"
                color='success'
                size='medium'
                sx={{ mt: 3, mb: 3 }}

            >

                {formName}
            </Button>
        </form>
    )
}
