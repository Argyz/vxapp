import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';


export const EmployeeCard = (props) => {

    const {
        activeEmployee,
        onNavigateBack,
        onDelete,
        onUpdate
    } = props;

    return (

        <Grid
            container
            justifyContent='center'
            sx={{
                height: 500,
            }}
        >

            <Card

            >
                <CardContent>

                    <Typography variant="h4" component="div">
                        <span>{activeEmployee.first_name}</span><span> {activeEmployee.last_name}</span>
                    </Typography>

                    <Typography sx={{ fontSize: 17, mt: 3 }} color="text.secondary" >
                        Email: {activeEmployee.email}
                    </Typography>

                    <Typography sx={{ fontSize: 17, mt: 3 }} color="text.secondary">
                        Phone Number: {activeEmployee.phone_number}
                    </Typography>

                    <Typography sx={{ fontSize: 17, mt: 3 }} color="text.secondary">
                        Hire Date: {activeEmployee.hire_date.slice(0, -14)}
                    </Typography>

                    <Typography sx={{ fontSize: 17, mt: 3 }} color="text.secondary">
                        Job Id:{activeEmployee.job_id}
                    </Typography>

                    <Typography sx={{ fontSize: 17, mt: 3 }} color="text.secondary">
                        Salary: ${activeEmployee.salary}
                    </Typography>

                    <Typography sx={{ fontSize: 17, mt: 3 }} color="text.secondary">
                        Commission Pct: ${activeEmployee.commission_pct}
                    </Typography>

                    <Typography sx={{ fontSize: 17, mt: 3 }} color="text.secondary">
                        Manager Id: {activeEmployee.manager_id}
                    </Typography>

                    <Typography sx={{ fontSize: 17, mt: 3 }} color="text.secondary">
                        Department Id: {activeEmployee.department_id}
                    </Typography>

                </CardContent>

                <CardActions sx={{
                    justifyContent: 'space-between'
                }}>
                    <Button onClick={onNavigateBack} size="small">Back</Button>
                    <Button onClick={onDelete} size="small">Delete</Button>
                    <Button onClick={onUpdate} size="small">Update</Button>
                </CardActions>
            </Card>

        </Grid>
    )
}
