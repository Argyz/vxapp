import { getEmployee, activeUser, setActiveEmployee, getSearchEmploye } from "./employeeSlice"
import { baseURL } from "../../api/apiURL"


export const getLoadingEmployee = () => {

    return async (dispatch) => {

        const res = await fetch(`${baseURL}`);
        const data = await res.json();

        dispatch(getEmployee({ employee: data.results }));
    }
}

export const startCreateUser = (formValue) => {

    return async () => {

        try {
            
            await fetch(`${baseURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValue)
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
        } catch (error) {
            console.log(error);
        }
    }
}

export const startActiveEmployee = (id, activeEmployee) => {

    return async (dispatch) => {

        dispatch(setActiveEmployee(id))
        dispatch(activeUser(activeEmployee))

    }
}

export const startDeleteEmployee = () => {

    return async (dispatch, getState) => {
        const { activeUser } = getState().employee;
        const { activeIdEmployee } = getState().employee;

        try {
            
            await fetch(`${baseURL}${activeIdEmployee}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(activeUser)
            })
                .then((response) => response.json())
                .then((json) => console.log(json))
        } catch (error) {
            console.log(error);
        }
    }
}

export const startUploadEmployee = (formState) => {

    return async (dispatch, getState) => {

        const { activeIdEmployee, activeUser } = getState().employee;

        const updateEmployee = {
            ...activeUser,
            ...formState,
        }

        try {

            await fetch(`${baseURL}${activeIdEmployee}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateEmployee)
            })
                .then((response) => response.json())
                .then((json) => console.log(json))

        } catch (error) {
            console.log(error);
        }
    }
}


export const startSearchEmployee = (name, page,limit) => {

    
    return async (dispatch) => {

        try {
            
            const res = await fetch(`${baseURL}?first_name=${name}&page=${page}&limit=${limit}`);
            const data = await res.json();
        
            
            dispatch(getSearchEmploye(data));

        } catch (error) {
            console.log(error);
        }
    }
};

