import express from 'express';
import { startConnection } from './config/database.config.js';
import environment from './config/environment.js';
import productsRouter from './resources/products/routes/products.routes.js';


//creamos instancia de la aplicacion express
const app = express();

//iniciar conexion a DB
startConnection()

//middleware para aceptar request de tipo json
app.use (express.json())



//ruta endpoint por defecto
app.get ('/', function (req, res){
    res.send ('"hola, hola');
});


//ruta endpoint de products
app.use (productsRouter)

//inicia aplicacion y queda escuchando requests
console.log (`Nos hemos conectado correctamente en el puerto: ${environment.PORT}`)
app.listen (environment.PORT)