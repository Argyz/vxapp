import { configureStore } from "@reduxjs/toolkit";
import {employeeSlice} from "./employee";

export const store = configureStore({
    reducer:{
        employee:employeeSlice.reducer
    }
})