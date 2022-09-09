import React from 'react';
import { TextField, Button } from '@mui/material';

import { useForm } from '../../hooks/useForm';


export const EmployeeFormSearch = ({onSearchSubmit}) => {


    const { searchText, page, limit, onInputChange } = useForm({
        searchText: '',
        page:'',
        limit:'',
    });
    
    const onHandleSubmit = (e)=>{
        e.preventDefault();

        onSearchSubmit(searchText,page,limit);
    }


    return (
        
        <form onSubmit={onHandleSubmit}>
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
    )
}
