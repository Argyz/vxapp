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
        messageSaved:'',
        
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
            state.messageSaved='';
        },

        getSearchEmploye: (state, action) => {
            
            state.messageSaved='';
            if (action.payload.resultadosJson) {
                state.employeesSearch=action.payload.resultado;
                state.page=action.payload.resultadosJson.next.page;
                state.limit=action.payload.resultadosJson.next.limit;
                

            } else {
                state.employeesSearch=action.payload.results;
            }
        },

        updateUser: (state, action) => {
            
            state.messageSaved=`Empleado ${action.payload} actualizado correctamente`
        },

        deleteUserById: (state, action) => {
            state.messageSaved=`Empleado ${action.payload} eleminado correctamente`
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