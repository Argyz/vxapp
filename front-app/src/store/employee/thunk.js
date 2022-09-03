import { getEmployee, activeUser, setActiveEmployee } from "./employeeSlice"
import { baseURL } from "../../api/apiURL"


export const getLoadingEmployee = () => {

    return async (dispatch) => {

        const res = await fetch(`${baseURL}api/users`);
        const data = await res.json();

        dispatch(getEmployee({ employee: data.results }));

    }
}

export const startCreateUser = (formValue) => {

    return async (dispatch) => {

        await fetch(`${baseURL}api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue)
        })
        .then((response)=> response.json())
        .then((data)=>console.log(data))

    }
}

export const startActiveEmployee = (id,activeEmployee) => {
    
    return async(dispatch)=>{

        dispatch(setActiveEmployee(id))
        dispatch(activeUser(activeEmployee))
        
    }
}

export const startDeleteEmployee = () => {

    return async(dispatch,getState)=>{
        const {activeUser} = getState().employee;
        const {activeIdEmployee}=getState().employee;
        /* await fetch(`${baseURL}api/users/${activeIdEmployee}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activeUser)
        })
        .then((response)=>response.json())
        .then((json)=>console.log(json)) */
    }
}