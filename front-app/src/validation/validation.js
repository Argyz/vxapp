
export const validation = (formState) => {

    
    const email=validateEmail(formState.email);
   
    const phoneNumber=validateOnlyNumber(formState.phone_number);
    const jobId=validateOnlyNumber(formState.job_id);
    const salary=validateOnlyNumber(formState.salary);
    const managerId=validateOnlyNumber(formState.manager_id);
    const departmentId=validateOnlyNumber(formState.department_id);

    

    let fields={
        phoneNumber,
        email,
        jobId,
        salary,
        managerId,
        departmentId,
    }

    return fields;
};

const validateEmail = (value) => {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value) {
        return emailRegex.test(value) ? true : false;
    } else {
        return null;
    }
};


const validateOnlyNumber = (value) => {
    
    let onlyNumberRegex = /^[0-9]+[0-9]*$/;

    if (value) {
        
        return onlyNumberRegex.test(parseInt(value)) ? true : false;
    }
};
