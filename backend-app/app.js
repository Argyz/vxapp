
const Server = require("./server/server");

const server= new Server();

const conection = require('./db/conection');

conection.connect((error) => {
    if (error) {
        throw error;
    }else{
        console.log("conexion exitosa");

    }
});


server.listen();