import mongoose from "mongoose";
import environment from "./environment.js";

mongoose.set(`strictQuery`, false);

//obtener URI de DB de MONGODB de las variables de entorno
const mongoDbURI = environment.DB_URI

//método para conectarse a DB a la que se le pasa la URI y ataja error
export const startConnection = () => {
    mongoose.connect (mongoDbURI).then (()=> console.log ( "conexión correcta")).catch (error => console.log (error))
}

//se define y exporta el objeto de la conexion
const db = mongoose.connection

export default db