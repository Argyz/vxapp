import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Typography, Button } from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { startSearchEmployee } from '../../store/employee/thunk';
import { EmployeesTablePagination } from '../components/index';

export const EmployeeSearch = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const { employeesSearch } = useSelector(state => state.employee);
    const { page: pagesUsers } = useSelector(state => state.employee);
    const { limit: limitUsers } = useSelector(state => state.employee);

    const { q } = queryString.parse(location.search);


    const { searchText, page, limit, onInputChange } = useForm({
        searchText: '',
        page:'',
        limit:'',
    });

    const onSearchSubmit = (e) => {
        
        e.preventDefault();
        navigate(`?q=${searchText.toLowerCase().trim()}&pagae=${page}&limit=${limit}`);
        

        dispatch(startSearchEmployee(searchText, page, limit));

    }

    return (

        <>
            <Typography variant='h4'>Search Employee</Typography>
            <Grid

                container
                alignItems='center'
                justifyContent='space-around'
                spacing={2}
                sx={{
                    mt: 2,
                    padding: 2,

                }}
            >

                <Grid
                    item
                    xs={5}
                    sx={{

                        height: 300,
                    }}
                >
                    <Typography variant='p'>Searching</Typography>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <TextField
                            label="Search"
                            type="text"
                            placeholder='Search'
                            fullWidth
                            name='searchText'
                            onChange={onInputChange}
                            value={searchText}
                        />
                        <TextField
                            label="Page"
                            type="text"
                            placeholder='Page'
                            name='page'
                            onChange={onInputChange}
                            value={page}
                            sx={{
                                marginTop: 1,
                                maxWidth: 100
                            }}

                        />
                        <TextField
                            label="Limit"
                            type="text"
                            placeholder='Limit'
                            name='limit'
                            onChange={onInputChange}
                            value={limit}
                            sx={{
                                marginTop: 1,
                                marginLeft: 1,
                                maxWidth: 100
                            }}

                        />

                        <Button
                            variant="contained"
                            type='submit'
                            sx={{
                                mt: 2,
                                maxWidth: 100,
                                display: 'block'
                            }}
                        >
                            Search
                        </Button>

                    </form>
                </Grid>
                <Grid
                    item
                    xs={5}
                    sx={{

                        height: 300,
                    }}
                >
                    <Typography>Results</Typography>
                    <hr />

                    {
                        employeesSearch.length !== 0

                            ? (<Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                background: '#cce5ff',
                                height: 70,
                                color: '#004085',
                                borderRadius: 2,
                                mt: 2

                            }}>
                                <Typography sx={{
                                    margin: 2,
                                }}>
                                    Search a Employee
                                </Typography>
                            </Box>)
                            : (<Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                background: '#f8d7da',
                                height: 70,
                                color: '#721c24',
                                borderRadius: 2,
                                mt: 2
                            }}>
                                <Typography sx={{
                                    margin: 2
                                }}>
                                    No Employee with <b>{q}</b>
                                </Typography>
                            </Box>)
                    }

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
                        page={pagesUsers}
                        limit={limitUsers} 
                    />
                }
            </Grid>
        </>
    )
}
