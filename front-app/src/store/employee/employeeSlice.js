import { createSlice } from "@reduxjs/toolkit";


export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        activeIdEmployee:null,
        activeUser:{},
        users: [],
        page: 0,
    
    },

    reducers: {

        getEmployee: (state, action) => {
            state.users = action.payload.employee;  
        },

        setActiveEmployee: (state, action) => {
            
            state.activeIdEmployee=action.payload;
        },
        
        activeUser: (state, action) => {
            state.activeUser=action.payload;
            
        },

        updateUser: (state, action) => {
            
        },

        deleteUserById: (state, action) => {

        },

    }

})

export const { 
    getEmployee, 
    setActiveEmployee,
    activeUser, 
    updateUser, 
    deleteUserById,
} = employeeSlice.actions;