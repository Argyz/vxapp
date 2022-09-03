const conection = require('../db/conection');
const pagination = require('../helpers/pagination');


const usuariosGet = (req, res, next) => {

    const {

        salary,
        job_id,
        department_id,
        limit,
        page = 1,
        orderBy,
        method=` ASC`,

    } = req.query;

    let whereQuery = '';

    let orderQuery = '';


    if (salary || job_id || orderBy || department_id) {

        whereQuery = `WHERE 1=1`;

        if (salary) {
            whereQuery += ` AND salary=${salary}`;
        }

        if (job_id) {
            whereQuery += ` AND job_id=${job_id}`;
        }

        if (department_id) {
            whereQuery += ` AND department_id=${department_id}`;
        }

        if (orderBy) {
            orderQuery = ` ORDER BY ${orderBy} ${method}`;
        }

    }

    const getQueryParams = `SELECT * FROM employee ${whereQuery} ${orderQuery}`;

    conection.query(getQueryParams, (error, results) => {

        if (error) {
            return res.status(500).json({
                msg: "Hubo un error en la conexion",
            });
        }


        if (limit) {

            const [resultado,resultadosJson]=pagination(results, page, limit);
            return res.status(200).json({
                msg: "Usuarios",
                resultadosJson,
                resultado,
            })
        }

        res.status(200).json({
            msg: "Usuarios",
            results,
        })
    })

}


const usuariosPOST = (req, res, next) => {


    const body = req.body;

    const {
        first_name,
        last_name,
        email,
        phone_number,
        hire_date,
        job_id,
        salary,
        commission_pct,
        manager_id,
        department_id,

    } = body;

    const insertQuery = `INSERT INTO employee (
        first_name,
        last_name,
        email,
        phone_number,
        hire_date,
        job_id,salary,
        commission_pct,
        manager_id,
        department_id) VALUES (
            "${first_name}",
            "${last_name}",
            "${email}",
            "${phone_number}",
            "${hire_date}",
            "${job_id}",
            "${salary}",
            "${commission_pct}",
            "${manager_id}",
            "${department_id}")`;


    conection.query(insertQuery, (error) => {


        if (error) {
            
            return res.status(500).send({
                msg: 'fallo la conexion'
            }) 
        }

        res.status(200).send({
            msg: 'Registro agendado con exito',
        })

    });
}

const usuariosPUT = (req, res) => {

    const body = req.body;

    const { id } = req.params;

    const {

        first_name,
        last_name,
        email,
        phone_number,
        hire_date,
        job_id,
        salary,
        commission_pct,
        manager_id,
        department_id,

    } = body;

    const updateQuery = `UPDATE employee SET 
        first_name="${first_name}",
        last_name="${last_name}",
        email="${email}", 
        phone_number="${phone_number}",
        hire_date="${hire_date}",
        job_id="${job_id}",
        salary="${salary}",
        commission_pct="${commission_pct}",
        manager_id="${manager_id}",
        department_id="${department_id}" WHERE employee_id=${id}`;

    conection.query(updateQuery, (error) => {


        if (error) {

            return res.status(500).send({
                msg: 'fallo la conexion'
            })
        }

        res.status(200).send({
            msg: 'Registro actualizado con exito',
        })

    });
}

const usuariosDELETE = (req, res) => {

    const { id } = req.params;

    const deleteQuery = `DELETE FROM employee WHERE employee_id=${id}`;

    conection.query(deleteQuery, (error) => {

        if (error) {
            console.log("Numeros de registros eliminados" + result.affectedRows);
            return res.status(500).send({
                msg: 'fallo la conexion'
            })
        }

        res.status(200).send({
            msg: 'Registro eliminado'
        })
    })
}


module.exports = { usuariosGet, usuariosPOST, usuariosPUT, usuariosDELETE }