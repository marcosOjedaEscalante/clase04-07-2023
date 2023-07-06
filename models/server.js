import express from 'express';
import { router } from '../routes/categorias.js';

export default class Server {

    constructor() {
        this.app = express();
        this.puerto = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de mi webservice
        this.routes();
    }

    // Middlewares
    middlewares() {
        this.app.set('view engine', 'hbs');
    }

    // Rutas de mi webservice
    routes() {
        this.app.use('/categorias', router);
        
    }

    // Escuchando
    listen() {
        this.app.listen(this.puerto, () => {
            console.log('WebService corriendo en puerto: ', this.puerto);
        });
    }

}