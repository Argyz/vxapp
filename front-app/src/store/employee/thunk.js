import { getEmployee, activeUser, setActiveEmployee, getSearchEmploye } from "./employeeSlice"
import { baseURL } from "../../api/apiURL"


export const getLoadingEmployee = () => {

    return async (dispatch) => {

        const res = await fetch(`${baseURL}api/users`);
        const data = await res.json();

        dispatch(getEmployee({ employee: data.results }));
    }
}

export const startCreateUser = (formValue) => {

    return async () => {

        await fetch(`${baseURL}api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
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

        await fetch(`${baseURL}api/users/${activeIdEmployee}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activeUser)
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
    }
}

export const startUploadEmployee = (formState) => {

    return async (dispatch, getState) => {

        const { activeIdEmployee, activeUser } = getState().employee;

        const updateEmployee = {
            ...activeUser,
            ...formState,
        }


        await fetch(`${baseURL}api/users/${activeIdEmployee}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateEmployee)
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
    }
}


export const startSearchEmployee = (name='') => {

    return async (dispatch) => {
        
        try {

            const res = await fetch(`${baseURL}api/users/?first_name=${name}`)
            const data = await res.json();

            dispatch(getSearchEmploye(data));

        } catch (error) {

        }
    }
};

