CREATE DATABASE vxpractical;


CREATE TABLE employee(
    employee_id int(6) NOT NULL AUTO_INCREMENT,
    first_name varchar(20) NOT NULL,
    last_name varchar(25) NOT NULL,
    email varchar(25) NOT NULL,
    phone_number varchar(20),
    hire_date date NOT NULL,
    job_id varchar(10) NOT NULL,
    salary decimal(8,2) NOT NULL,
    commission_pct decimal(2,2),
    manager_id int(6),
    department_id int(4),
    PRIMARY KEY(employee_id)
)


SELECT * FROM employee WHERE 1=1 AND salary='' ORDER BY 


INSERT INTO employee (
        first_name,
        last_name,
        email,
        phone_number,
        hire_date,
        job_id,salary,
        commission_pct,
        manager_id,
        department_id) VALUES ()



UPDATE employee SET 
        first_name="${first_name}",
        last_name="${last_name}",
        email="${email}", 
        phone_number="${phone_number}",
        hire_date="${hire_date}",
        job_id="${job_id}",
        salary="${salary}",
        commission_pct="${commission_pct}",
        manager_id="${manager_id}",
        department_id="${department_id}" WHERE employee_id=${id}



DELETE FROM employee WHERE employee_id= 



