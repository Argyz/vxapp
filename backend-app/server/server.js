const express=require('express');
const cors=require('cors');


require('dotenv').config();

class Server{

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;

        this.middleware();
        this.router();
    }

    middleware(){

        this.app.use(cors())
        this.app.use(express.json());
    }

    router(){

        this.app.use('/api/users',require('../router/user-router'));
        
    }

    listen(){

        this.app.listen(this.port,() => {
            console.log(`Server activo en puerto ${this.port}`);
        })
    }
}


module.exports=Server;