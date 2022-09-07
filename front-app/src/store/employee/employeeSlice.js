import { createSlice } from "@reduxjs/toolkit";


export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        activeIdEmployee: null,
        activeUser: {},
        employeesSearch: [],
        users: [],
        page: 0,
        limit: 0,

    },

    reducers: {

        getEmployee: (state, action) => {
            state.users = action.payload.employee;
        },

        setActiveEmployee: (state, action) => {

            state.activeIdEmployee = action.payload;
        },

        activeUser: (state, action) => {
            state.activeUser = action.payload;

        },

        getSearchEmploye: (state, action) => {
            
            if (action.payload.resultadosJson) {
                state.employeesSearch=action.payload.resultado;
                state.page=action.payload.resultadosJson.next.page;
                state.limit=action.payload.resultadosJson.next.limit;

            } else {
                state.employeesSearch=action.payload.results;
            }
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
    getSearchEmploye,
    updateUser,
    deleteUserById,
} = employeeSlice.actions;