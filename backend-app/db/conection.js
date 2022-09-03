const mysql = require('mysql');

const conection=mysql.createConnection({
    host: 'localhost',
    database: 'vxpractical',
    user: 'martindev',
    password: 'martin1644',
});


module.exports=conection;
