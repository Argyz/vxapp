import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Divider } from '@mui/material';

import { startSearchEmployee } from '../../store/employee/thunk';
import { EmployeeFormSearch, EmployeesTablePagination } from '../components/index';

export const EmployeeSearch = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();


    const { employeesSearch } = useSelector(state => state.employee);
    const { resultSearch } = useSelector(state => state.employee);
    
    //const { page: pagesUsers } = useSelector(state => state.employee);
    //const { limit: limitUsers } = useSelector(state => state.employee);

    const { q } = queryString.parse(location.search);

    const onSearchSubmit = (searchText, page, limit) => {

        navigate(`?q=${searchText.toLowerCase().trim()}&pagae=${page}&limit=${limit}`);

        dispatch(startSearchEmployee(searchText, page, limit));
    }

    return (

        <>

            <Grid

                container
                alignItems='center'
                justifyContent='space-around'
                sx={{
                    mt: 10,
                    padding: 2,

                }}
            >

                <Grid
                    item
                    xs={6}
                    sx={{

                        height: 300,
                    }}
                >
                    <Box sx={{ mb: 3 }}>
                        <Typography sx={{fontWeight:'bold'}}>Searching</Typography>
                        <Divider />
                    </Box>


                    <EmployeeFormSearch onSearchSubmit={onSearchSubmit} />

                </Grid>
            </Grid>

            <Grid
                container
                justifyContent='center'
                alignItems='center'

            >
                {
                    <EmployeesTablePagination
                        employeesSearch={employeesSearch}

                    />
                }
            </Grid>
        </>
    )
}
